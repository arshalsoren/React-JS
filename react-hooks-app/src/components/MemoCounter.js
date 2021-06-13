import React, { useState, useMemo } from 'react'

function MemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++ // for delay
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter One: {counterOne}</button>
                <span>{isEven ? 'even' : 'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two: {counterTwo}</button>
            </div>
        </div>
    )
}

export default MemoCounter