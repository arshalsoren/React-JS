import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {... this.props}
                />
            )
        }
    }
    return WithCounter
}

export default withCounter

// HOC accepts a component and returns an enhanced component.
// and is used to share common functionality between multiplee components.