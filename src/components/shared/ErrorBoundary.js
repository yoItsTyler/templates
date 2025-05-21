import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can add error reporting service here (e.g., Sentry)
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'error', {
          error_message: error.message,
          error_stack: error.stack,
          error_info: JSON.stringify(errorInfo)
        });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We're working on fixing this. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              cursor: 'pointer',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#f0e68c',
              fontSize: '16px'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
} 