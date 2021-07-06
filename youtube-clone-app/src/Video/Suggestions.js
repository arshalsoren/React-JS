import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Suggestions({ videos, changeSelection }) {

    const changeSelectedVideo = (data) => {
        changeSelection(data)
    }

    return (
        <ListGroup>
            <div>
                {videos.length > 0 && videos.map(data =>
                    <p
                        style={{ cursor: 'pointer' }}
                        onClick={() => { changeSelectedVideo(data) }}
                    >
                        {data.title}
                    </p>)
                }
            </div>
            {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
    )
}

export default Suggestions
