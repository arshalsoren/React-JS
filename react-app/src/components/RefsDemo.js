import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputref = React.createRef()
        this.cbRef= null
        this.setCbRef= (element) =>{
            this.cbRef = element
        }
    }

    componentDidMount(){
        // this.inputref.current.focus()
        // console.log(this.inputref)

        if (this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputref.current.value)
    }
    
    render() {
        return (
            <div>
                Username: <input type="text" ref={this.inputref} />
                Username: <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
