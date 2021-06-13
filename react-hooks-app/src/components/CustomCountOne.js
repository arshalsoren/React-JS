import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomCountOne() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>CounterOne - {count}</button>
        </div>
    )
}

export default CustomCountOne
