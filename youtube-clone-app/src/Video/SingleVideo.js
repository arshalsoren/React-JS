import React from 'react'
import { Col } from 'react-bootstrap'

function SingleVideo() {
    return (
        <>
            <div>
                <div>
                    <iframe
                        width="780"
                        height="439"
                        src="https://www.youtube.com/embed/FxQTY-W6GIo"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div>
                    <div>Title-Goes-Here</div>
                    <div>Description-Here</div>
                </div>
            </div>
        </>
    )
}

export default SingleVideo
