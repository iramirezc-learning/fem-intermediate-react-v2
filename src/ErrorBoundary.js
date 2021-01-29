import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }

    if (this.state.hasError) {
      return (
        <div className="error">
          <h1>There has been an error!</h1>
          <h2>
            <Link to="/">Click here</Link> to go back to the homepage
            <br />
            or wait for 5 seconds to be redirected...
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
