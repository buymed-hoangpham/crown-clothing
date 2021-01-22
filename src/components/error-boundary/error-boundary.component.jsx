import React, { Component } from 'react';
import { ErrorImageText } from './error-boundary.styles';
import { ErrorImageOverlay } from './error-boundary.styles';
import { ErrorImageContainer } from './error-boundary.styles';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError)
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png"></ErrorImageContainer>
                    <ErrorImageText>
                        This page is Lost In Space!!!
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        return this.props.children;
    }
}

export default ErrorBoundary;
