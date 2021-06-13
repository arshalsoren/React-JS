import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    // CONDITIONAL RENDERING
    render() {

        // APPROACH_4 - Shortcircuit Operator
        return this.state.isLoggedIn && <div>Welcome Soren</div>

        // APPROACH_3 - Ternary Operators
        // return this.state.isLoggedIn ? <div>Welcome Soren</div> : <div>Welcome Bedia</div>

        // APPROACH_2 - Using Variable
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Soren</div>
        // } else{
        //     message = <div>Welcome Bedia</div>
        // }
        // return <div>{message}</div>

        // APPROACH_1 - Classic
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Soren</div>
        // } else {
        //     return <div>Welcome Bedia</div>
        // }
    }
}

export default UserGreeting
