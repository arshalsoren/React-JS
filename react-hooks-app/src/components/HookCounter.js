import React, { useState } from 'react'

function HookCounter() {

    const [ count, inCount ] = useState(0)
    
    return (
        <div>
            <button onClick={() => inCount(count + 1)}>Clicked {count}</button>
        </div>
    )
}

export default HookCounter
