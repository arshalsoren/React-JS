import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
        // this.setState(
        //     {
        //     count: this.state.count+1
        //     },
        //     () => {
        //     console.log('Callback value : ', this.state.count)
        //     }
        // )

        this.setState((prevState, props) => (
            {
                count: prevState.count + 1
            }
        ))
        console.log(this.state.count)
    }

    //  seState wil let React know to has to rerender the component.
    //  Calss to setState are asynchronous.

    incrementSeven(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    decrement(){
        this.setState({
            count: this.state.count-1
        })
    }

    render() {
        return (
            <div>
                <div>Count = {this.state.count}</div>
                <button onClick={() => this.incrementSeven()}>INCREMENT</button>
                <button onClick={() => this.decrement()}>DECREMENT</button>
            </div>
        )
    }
}

export default Counter
