import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log("ClassClick clicked..")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
