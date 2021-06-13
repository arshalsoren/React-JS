import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError){
            return <h1>Houston! We have a problem</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary

// Error boundaaries are React components that catch JavaScript error in their child
// component tree, log those error, and display a fall-back UI.