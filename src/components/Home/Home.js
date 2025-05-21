import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import keys from '../../images/darkPianoKeys.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Navbar } from '../Navbar/Navbar';
import sharieWithStudent from '../../images/sharieWithStudent.webp';
import { useState, useCallback, useMemo, memo, useEffect, useRef } from 'react';
import { ArrowBack, ArrowForward, Star } from '@mui/icons-material';
import { FAQSection } from '../FAQSection';
import Footer from '../Footer/Footer';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Memoize static components
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);
const MemoizedFAQSection = memo(FAQSection);

const ResponsiveImage = memo(({ src, alt, className, sizes, width, height }) => (
    <picture>
        <img
            src={src} 
            alt={alt}
            className={className}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            sizes={sizes}
            style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
        />
    </picture>
));

const AnimatedSection = memo(({ children, className, style }) => {
    const { targetRef, hasIntersected } = useIntersectionObserver({
        threshold: 0.2
    });

    return (
        <div
            ref={targetRef}
            className={className}
            style={{
                ...style,
                opacity: hasIntersected ? 1 : 0,
                transform: `translateY(${hasIntersected ? 0 : '20px'})`,
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
        >
            {children}
        </div>
    );
});

// Move reviews data outside component to prevent recreation
const REVIEWS = [
    {
        text: `As an older student (70+), with some previous piano experience in her youth, I wanted to relearn/refresh my ability to play the piano. Sharie has been wonderful in helping me along this journey. She has been incredibly supportive and encouraging of my efforts. And when I went away for the 3 months in the winter, we were able to continue lessons with the use of technology. She's also has been teaching my young granddaughter.

She clearly loves the piano, giving lessons and her students.She makes it fun to learn!`,
        author: "Susan Kirkham"
    },
    { text: "I've learned so much in just a few months. Highly recommend!", author: "James L." },
    { text: "Sharie's patience and expertise are unmatched. A true professional.", author: "Laura K." },
];

// Background image preloader component
const BackgroundImage = memo(({ className, children }) => {
    const [bgImage, setBgImage] = useState(keys);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = keys;
        img.onload = () => {
            setBgImage(keys);
        };
        img.onerror = () => {
            setImageError(true);
            console.error('Failed to load background image');
        };
    }, []);

    return (
        <div className={className} style={{ 
            backgroundImage: imageError ? 'none' : `url(${bgImage})`,
            backgroundColor: imageError ? '#f5f5f5' : 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
            transition: 'background-image 0.5s ease-in-out'
        }}>
            {children}
        </div>
    );
});

export const Home = () => {
    const history = useHistory();
    const [currentReview, setCurrentReview] = useState(0);
    const tTwoRef = useRef(null);

    // Memoize reviews data
    const reviews = useMemo(() => [
        {
            text: `As an older student (70+), with some previous piano experience in her youth, I wanted to relearn/refresh my ability to play the piano. Sharie has been wonderful in helping me along this journey. She has been incredibly supportive and encouraging of my efforts. And when I went away for the 3 months in the winter, we were able to continue lessons with the use of technology. She's also has been teaching my young granddaughter.

She clearly loves the piano, giving lessons and her students.She makes it fun to learn!`,
            author: "Susan Kirkham"
        },
        { text: "I've learned so much in just a few months. Highly recommend!", author: "James L." },
        { text: "Sharie's patience and expertise are unmatched. A true professional.", author: "Laura K." },
    ], []);

    // Memoize handlers
    const handleNextReview = useCallback(() => {
        setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, []);

    const handlePreviousReview = useCallback(() => {
        setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    }, []);

    const handleConsultationClick = useCallback(() => {
        history.push('/consultation');
    }, [history]);

    // Memoize button style
    const consultationButtonStyle = useMemo(() => ({
        marginTop: '20px',
        backgroundColor: '#ffffff',
        color: '#000',
        padding: '12px 24px',
        borderRadius: '25px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        transition: 'transform 0.2s, background-color 0.2s',
        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
    }), []);

    // Scroll handler for the down arrow
    const handleScrollDown = useCallback(() => {
        if (tTwoRef.current) {
            tTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    // Add effect to prevent mobile viewport height issues
    useEffect(() => {
        const setHeight = () => {
            // Set a CSS variable for the actual viewport height
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--real-vh', `${vh}px`);
        };

        // Initial setup
        setHeight();

        // Add event listeners
        window.addEventListener('resize', setHeight);
        window.addEventListener('orientationchange', setHeight);

        return () => {
            window.removeEventListener('resize', setHeight);
            window.removeEventListener('orientationchange', setHeight);
        };
    }, []);

    return (
        <div className={styles.main}>
            <MemoizedNavbar />
            <div className={styles.tOne} style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${keys})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                position: 'relative'
            }}>
                <div className={styles.title}>Creative Play Piano Studio</div>
                <h2 className={styles.subtitle} style={{ 
                    fontSize: '1.5rem', 
                    color: 'white', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
                    fontFamily: 'Julius Sans One, sans-serif',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto 20px auto',
                    padding: '0 20px'
                }}>
                    Unlock Your Musical Potential – Learn Piano Online with Sharie Samuelson.
                </h2>

                <div className={styles.tOneBottom}>
                    <Button
                        aria-label="Book a free consultation"
                        variant="contained"
                        onClick={handleConsultationClick}
                        style={consultationButtonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#f0e68c')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#ffffff')}
                    >
                        Book a Free Consultation
                    </Button>
                    <ExpandMoreIcon 
                        className={styles.scrollDown} 
                        fontSize='large'
                        onClick={handleScrollDown}
                    />
                </div>
            </div>

            <AnimatedSection className={styles.tTwo} ref={tTwoRef}>
                <div className={styles.aboutRow}>
                    <div className={styles.aboutLeft}>
                        <ResponsiveImage
                            src={sharieWithStudent}
                            alt="Sharie Samuelson teaching piano"
                            className={styles.studentPlayingPiano}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className={styles.aboutRight}>
                        <h1>About Sharie Samuelson</h1>
                        <h3>Inspiring a Love for Music Through Piano Education</h3>
                        <p>Sharie Samuelson is a passionate piano instructor with over 30 years of experience teaching students of all ages and skill levels. Her journey began at the age of six in Cannon Falls, Minnesota, and led to a Bachelor's Degree in Music Education from Lawrence University. Over her career, Sharie has taught hundreds of students, sharing her love for piano through personalized lessons and with a patient, encouraging approach.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className={styles.tThree}>
                <h1>Why Choose Virtual Piano Lessons?</h1>
                <h3>The Benefits of Learning Piano Online</h3>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🎹</span>
                        <h4>Flexibility</h4>
                        <p>Learn and grow from the comfort of your own home. No need to commute—your piano journey is just a click away.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🌟</span>
                        <h4>Personalized Attention</h4>
                        <p>Enjoy one-on-one lessons designed around your unique goals and skill level. Every session is tailored to help you succeed.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <span className={styles.icon}>🌍</span>
                        <h4>Accessible for All</h4>
                        <p>Whether you're balancing a busy schedule or living in a remote area, virtual lessons make quality piano education available wherever you are.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <MemoizedFAQSection />
            </AnimatedSection>

            <AnimatedSection className={styles.tFour}>
                <h1>Reviews</h1>
                <div className={styles.reviewBox}>
                    <p>"{REVIEWS[currentReview].text}"</p>
                    <h4>- {REVIEWS[currentReview].author}</h4>
                </div>
                <div className={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} className={styles.starIcon} />
                    ))}
                </div>
                <div className={styles.carouselButtons}>
                    <Button
                        variant="contained"
                        onClick={handlePreviousReview}
                        aria-label="View previous review"
                        sx={{
                            backgroundColor: "black",
                            '&:hover': {
                                backgroundColor: "black",
                            },
                            '&:focus': {
                                backgroundColor: "black",
                            },
                        }}
                    >
                        <ArrowBack />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleNextReview}
                        aria-label="View next review"
                        sx={{
                            backgroundColor: "black",
                            '&:hover': {
                                backgroundColor: "black",
                            },
                            '&:focus': {
                                backgroundColor: "black",
                            },
                        }}
                    >
                        <ArrowForward />
                    </Button>
                </div>
            </AnimatedSection>

            <MemoizedFooter />
        </div>
    );
};