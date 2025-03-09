import React, { Component, ReactNode } from 'react';
import { logger } from './errorLogging';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logger.error('Unhandled error caught in ErrorBoundary', { error: error.message, stack: info.componentStack });
  }

  handleDownloadLogs = () => {
    logger.downloadLogs();
  };

  handleClearLogs = () => {
    logger.clearLogs();
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ padding: '20px', textAlign: 'center', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: 'red' }}>Something went wrong.</h2>
            <p>The error has been logged. You can download the logs for debugging.</p>
            <button
              onClick={this.handleDownloadLogs}
              style={{ padding: '10px 15px', margin: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
            >
              📥 Download Logs
            </button>
            <button onClick={this.handleClearLogs} style={{ padding: '10px 15px', margin: '10px', cursor: 'pointer', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>
              🗑️ Clear Logs & Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
