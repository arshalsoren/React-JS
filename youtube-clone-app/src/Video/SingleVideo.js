import React from 'react'
import { Col } from 'react-bootstrap'

function SingleVideo({ detail }) {
    return (
        <div>
            {detail && (
                <div>
                    <iframe
                        width="100%"
                        height="400px"
                        src={`https://www.youtube.com/embed/${detail.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <h3>{detail.title}</h3>
                    <p>{detail.description}</p>
                </div>
            )}
        </div>
    )
}

export default SingleVideo
