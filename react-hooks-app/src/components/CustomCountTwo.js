import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomCountTwo() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>CounterTwo - {count}</button>
        </div>
    )
}

export default CustomCountTwo
