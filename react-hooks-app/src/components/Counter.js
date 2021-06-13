import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter() {
    const [count, increment, decrement, reset] = useCounter(15, 5)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}

export default Counter
