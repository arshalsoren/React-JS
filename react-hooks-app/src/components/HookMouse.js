import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePointer = e => {
        console.log('mouse event called')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Update')
        window.addEventListener('mousemove', logMousePointer)

        return () => {
            console.log('Component Unmounting')
            window.removeEventListener('mousemove', logMousePointer)
        }
    }, [])

    return (
        <div>
            Hooks X- {x} Y-{y}
        </div>
    )
}

export default HookMouse
