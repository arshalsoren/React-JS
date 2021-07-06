import logo from './logo.svg';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import Video from './Video/Video';
import Logo from "./youtube-logo.jpg"

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [passToChild, setPassToChild] = useState("");

  const onSubmitText = e => {
    e.preventDefault();
    setPassToChild(searchTerm);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={(e) => onSubmitText(e)}>
            <Form.Row className="search-box">
              <Col xs={12} md={2} style={{ margin: "auto" }}>
                <img
                  src={Logo}
                  alt="youtube logo"
                  width="100px"
                  style={{ margin: "auto" }} />
              </Col>
              <Col md={7} xs={9}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search"
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{ flex: 1 }} />
              </Col>
              <Col xs={9} md={7}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={(e) => onSubmitText(e)}>
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Video searchText={passToChild} />
      </Row>
    </Container>
  );
}

export default App;
