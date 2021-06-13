import React, { useContext } from 'react'
import { CountContext } from '../App'

function F() {
    const compContext=useContext(CountContext)
    return (
        <div>
            Component F
            <button onClick={() => compContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => compContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => compContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default F