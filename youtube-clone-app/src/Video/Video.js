import React from 'react'
import { Col } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Suggestions from './Suggestions'

function Video() {
    return (
        <React.Fragment>
            <Col xs={12} lg={8}>
                <SingleVideo />
            </Col>
            <Col xs={12} lg={4}>
                <Suggestions />
            </Col>
        </React.Fragment>
    )
}

export default Video