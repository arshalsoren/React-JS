import React from 'react'
import { Col } from 'react-bootstrap'

function SingleVideo({ detail }) {
    return (
        <div>
            {detail && (
                <div>
                    <iframe
                        width="780"
                        height="439"
                        src={`https://www.youtube.com/embed/${detail.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <h1>{detail.title}</h1>
                    <h4>{detail.description}</h4>
                </div>
            )}
        </div>
    )
}

export default SingleVideo
