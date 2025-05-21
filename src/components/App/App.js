import { useEffect, Suspense, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import styles from './styles.module.css';
import React from 'react';
import { ErrorBoundary } from '../shared/ErrorBoundary';

// Preload critical resources
const preloadResources = () => {
    // Preload critical images
    const imagesToPreload = [
        '/images/darkPianoKeys60.webp',
        '/images/sharieWithStudent.webp'
    ];

    imagesToPreload.forEach(imageUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
    });

    // Preload critical fonts with display swap
    const fontsToPreload = [
        'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap&display=swap',
        'https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap&display=swap'
    ];

    fontsToPreload.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = fontUrl;
        link.setAttribute('crossorigin', '');
        document.head.appendChild(link);
        
        // Also load the font stylesheet immediately 
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = fontUrl;
        fontLink.setAttribute('media', 'print');
        fontLink.setAttribute('onload', "this.media='all'");
        document.head.appendChild(fontLink);
    });
    
    // Add preconnect for domains
    const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
    ];
    
    domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
    });
};

// Lazy load components with improved prefetch strategy
const Home = React.lazy(() => {
    // Use requestIdleCallback for non-critical preloading
    const prefetchOtherComponents = () => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
                import('../Resources/Resources');
                import('../Consultation/Consultation');
            }, { timeout: 2000 });
        } else {
            setTimeout(() => {
                import('../Resources/Resources');
                import('../Consultation/Consultation');
            }, 2000);
        }
    };

    // Start the Home component loading immediately
    const componentPromise = import('../Home').then(module => {
        prefetchOtherComponents();
        return { default: module.Home };
    });
    
    return componentPromise;
});

const Consultation = React.lazy(() => 
    import('../Consultation/Consultation')
        .then(module => ({ default: module.Consultation }))
);

const Resources = React.lazy(() => 
    import('../Resources/Resources')
        .then(module => ({ default: module.Resources }))
);

// Enhanced loading fallback with transition and no layout shift
const LoadingFallback = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f5f5f5',
        animation: 'fadeIn 0.3s ease-in forwards'
    }}>
        <style>
            {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}
        </style>
        <div role="status">Loading...</div>
    </div>
);

export const App = () => {
    useEffect(() => {
        // Initialize preload resources
        preloadResources();

        // Register performance monitoring
        if ('PerformanceObserver' in window) {
            try {
                // Monitor LCP
                const lcpObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
                });
                
                lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                
                // Monitor FID
                const fidObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('FID:', lastEntry.processingStart - lastEntry.startTime, 'ms');
                });
                
                fidObserver.observe({ type: 'first-input', buffered: true });
                
                // Monitor CLS
                let clsValue = 0;
                let clsEntries = [];
                const clsObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            clsEntries.push(entry);
                        }
                    });
                    console.log('CLS:', clsValue, clsEntries);
                });
                
                clsObserver.observe({ type: 'layout-shift', buffered: true });
            } catch (e) {
                console.error('Performance observer error:', e);
            }
        }

        const lockVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        lockVH();
        
        // Add event listener for resize with debounce
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(lockVH, 150);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Memoize theme to prevent unnecessary recreations
    const theme = useMemo(() => {
        const baseTheme = createTheme({
            typography: {
                fontFamily: '"Crimson Text", serif',
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        disableRipple: true,
                    },
                    styleOverrides: {
                        root: {
                            textTransform: 'none',
                        },
                    },
                },
                MuiPaper: {
                    defaultProps: {
                        elevation: 0,
                    },
                },
            },
            props: {
                MuiButtonBase: {
                    disableRipple: true,
                },
            },
        });
        
        return responsiveFontSizes(baseTheme);
    }, []);

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <div className={styles.main}>
                    <Suspense fallback={<LoadingFallback />}>
                        <Switch>
                            <Route path={'/consultation'} component={Consultation}/>
                            <Route path={'/resources'} component={Resources}/>
                            <Route path={['/']} component={Home} />
                        </Switch>
                    </Suspense>
                </div>
            </ThemeProvider>
        </ErrorBoundary>
    );
};