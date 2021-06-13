import React, { Component } from 'react'

class Message extends Component{
    
    constructor(){
        super()
        this.state={
            message: "Welcome... Enjoy your visit!"
        }
    }

    //  A state is an object that is privately maintained inside the component.
    //  It can influence what is rendered in the browser.
    //  It is mutable i.e. It can be changed within the component.
    
    changeMessage(){
        this.setState({
            message: "Thank Your For Your Visit"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>End Tour</button>
            </div>
        )
    }
}

export default Message