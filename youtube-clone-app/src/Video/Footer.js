import React from 'react'
import { Col } from 'react-bootstrap'

function Footer() {
    return (
        <Col xs={12}>
            <p style={{ textAlign: "center", padding: 15 }}>
                Made with 💖 by <a style={{color: "red"}}href="https://www.github.com/arshalsoren" target="_blank">Arshal Soren</a>
            </p>
        </Col>
    )
}

export default Footer
