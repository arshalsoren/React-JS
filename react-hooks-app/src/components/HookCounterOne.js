import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(`useEffect - Update`)
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input
                type="text"
                value={name.value}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
