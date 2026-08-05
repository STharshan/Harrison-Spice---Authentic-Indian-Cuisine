// @ts-nocheck
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application render error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6 text-center text-white">
          <div className="max-w-md rounded-2xl border border-[#C5A059]/30 bg-[#121212] p-8 shadow-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#C5A059]">
              Something Went Wrong
            </p>
            <h1 className="mb-3 font-serif text-3xl">Please refresh and try again</h1>
            <p className="text-sm text-gray-300">
              We could not load the Harrison Spice site correctly. Refresh the page to retry.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
