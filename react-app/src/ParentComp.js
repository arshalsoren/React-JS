import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'soren'
        }
    }

    componentDidUpdate(){
        setInterval(() =>{
            this.setState({
                name: 'soren'
            })
        }, 2000)
    }
    
    render() {
        console.log('PArentcomp render')
        return (
            <div>
                PARENT Component
                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp