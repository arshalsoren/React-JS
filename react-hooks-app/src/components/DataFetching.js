import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [click, setClick] = useState(1)

    const clickHandler = () => {
        setClick(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${click}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [click])

    return (
        <div>
            Id: <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={clickHandler}>Fetch</button>
            <div>Ttitle: {posts.title}</div>
        </div>
    )
}

export default DataFetching
