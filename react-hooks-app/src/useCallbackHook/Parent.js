import React, {useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function Parent() {
    const [Age, setAge] = useState(18)
    const [Salary, setSalary] = useState(10000)

    const incrementAge = () =>{
        setAge(Age+1)
    }
    const incrementSalary = ()=>{
        setSalary(Salary+1000)
    }

    return (
        <div>
            <Title />
            <Count text="Age" count={Age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={Salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default Parent
