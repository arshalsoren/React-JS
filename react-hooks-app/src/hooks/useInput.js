import { useState } from 'react'

function useInput(initialData) {
    const [data, setData] = useState(initialData)
    const reset = () => {
        setData(initialData)
    }
    const bind = {
        data,
        onChange: e => {
            setData(e.target.value)
        }
    }
    return [data, bind, reset]
}

export default useInput
