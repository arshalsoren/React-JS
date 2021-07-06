import logo from './logo.svg';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import Video from './Video/Video';

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
            <Form.Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search"
                  onChange={e => setSearchTerm(e.target.value)} />
              </Col>
              <Col xs={3} md={3}>
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
