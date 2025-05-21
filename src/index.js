import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './components/App';

// Register service worker
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Create a performance observer
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Log performance metrics
    console.log('Performance Entry:', entry);
  });
});

// Observe different types of performance metrics
observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

// Lazy load the Consultation component
const Consultation = lazy(() => import('./components/Consultation/Consultation').then(module => ({
    default: module.Consultation
})));

// Add a loading component
const LoadingFallback = () => (
    <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    }}>
        Loading...
    </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path="/consultation" component={Consultation} />
          <Route path="/" component={App} />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Report web vitals with enhanced analytics
reportWebVitals(metric => {
  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value * 1000) / 1000,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      // Add additional context
      page_path: window.location.pathname,
      debug_info: JSON.stringify(metric)
    });
  }
});
