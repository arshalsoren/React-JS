import React, { useState } from 'react'

function HookArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,   //initial value=0, after each iteration it increases by 1 
            value: Math.floor(Math.random() * 10) + 1   //selects a random number between 0-10
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add number to the array</button>
            <ul>
                {items.map(item =>
                    <li key={item.id}>{item.value}</li>)}
            </ul>
            <h3>{JSON.stringify(items)}</h3>
        </div>
    )
}

export default HookArray
