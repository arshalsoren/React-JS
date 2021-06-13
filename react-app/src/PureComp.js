import React, { PureComponent } from 'react'
import App from './App'

class PureComp extends PureComponent {
    render() {
        console.log('purecomp render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

// PureComponent is a replacement for App.js. Implements shouldComponentUpdate with a shallow props and state comparison
// whereas regular component does not.
// If there is no difference, the component is noyt re-rendered.
// Prevents unneccassry renders and can boost performance in certain scenarios.

export default PureComp