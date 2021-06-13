import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome