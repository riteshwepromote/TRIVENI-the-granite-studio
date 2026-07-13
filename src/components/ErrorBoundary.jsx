import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center text-[#f5ede0]">
          <div className="max-w-md rounded-2xl border border-[#C67D55]/30 bg-[#141414] p-8 shadow-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C67D55]">
              Something went wrong
            </p>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              The page could not be loaded properly.
            </h2>
            <p className="mb-6 text-sm leading-6 text-[#d7cfc4]">
              A rendering error interrupted navigation. Refreshing the page will
              restore the experience.
            </p>
            <button
              type="button"
              onClick={this.handleReset}
              className="rounded-full bg-[#C67D55] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#b06d4b]"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
