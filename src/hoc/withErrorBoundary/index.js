import React from "react";
import store from "store";

const withErrorBoundary = WrappedComponent => {
  class withErrorBoundary extends React.Component {
    state = {
      isLoading: false,
      hasErrors: false
    };
    componentDidMount() {
      store.subscribe(() => {
        this.setState({
          isLoading: store.getState().events.isLoading,
          hasErrors: store.getState().events.error
        });
      });
    }
    render() {
      if (this.state.hasErrors) {
        return <p>{this.state.hasErrors}</p>;
      }
      return <WrappedComponent />;
    }
  }
  return withErrorBoundary;
};

export default withErrorBoundary;
