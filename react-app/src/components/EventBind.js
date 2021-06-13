import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome"
        }

        // Method_3
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this)
    // }

    // Method_4
    clickHandler= () => {
        this.setState({
            message: "GoodBye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Method_1 = <button onClick={this.clickHandler.bind(this)}>Click Me !!</button> */}
                {/* Method_2 = <button onClick={() => this.clickHandler()}>Click Me !!</button> */}
                {/* <button onClick={this.clickHandler}>Click Me !!</button> */}
                <button onClick={this.clickHandler}>Click Me !!</button>
            </div>
        )
    }
}

export default EventBind
