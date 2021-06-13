import React, { Component, PureComponent } from 'react'

class RegularComponent extends PureComponent {
    render() {
        console.log('regcomp render')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
