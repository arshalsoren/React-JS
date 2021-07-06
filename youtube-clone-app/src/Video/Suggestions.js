import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Suggestions({ videos, changeSelection }) {

    const changeSelectedVideo = (data) => {
        changeSelection(data)
    }

    return (
        <React.Fragment>
            {videos.length > 0 &&
                videos.map(data => (
                    <ListGroup.Item onClick={()=>changeSelectedVideo(data)}>
                        <div
                            style={{
                                marginBottom: 10,
                                padding: 10,
                                display: "flex",
                                cursor: "pointer"
                            }}
                        >
                            <div>
                                <img src={data.thumbnails.medium.url} height="70px" />
                            </div>
                            <div style={{ paddingLeft: 5}}>
                                <div className="sugg-title">{data.title}</div>
                                <div className="sugg-channel">{data.channel.title}</div>
                            </div>
                        </div>
                    </ListGroup.Item>
                )
                )
            }
        </React.Fragment>
    )
}

export default Suggestions
