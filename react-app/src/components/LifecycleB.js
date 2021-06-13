import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Soren'
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB getDerivedFromProps")
        return null
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
