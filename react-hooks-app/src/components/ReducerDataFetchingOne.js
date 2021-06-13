import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ReducerDataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/69`)
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Houston! We have a problem')
            })
    }, [])
    return (
        <div>
            {loading ? loading : post.title}
            {error ? error : null}
        </div>
    )
}

export default ReducerDataFetchingOne
