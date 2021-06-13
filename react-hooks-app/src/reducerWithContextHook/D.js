import React, { useContext } from 'react'
import { CountContext } from '../App'

function D() {
    const compContext=useContext(CountContext)
    return (
        <div>
            Component D
            <button onClick={() => compContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => compContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => compContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default D
