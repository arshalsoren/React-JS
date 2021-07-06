import logo from './logo.svg';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import Video from './Video/Video';
import Logo from "./youtube-logo.jpg"
import Footer from './Video/Footer';

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
              <Row>

                {/* YouTube Logo */}
                <Col xs={6} md={2} style={{ margin: "auto" }}>
                  <img
                    src={Logo}
                    alt="youtube logo"
                    width="100px"
                    style={{ margin: "auto" }} />
                </Col>

                {/* Search Bar */}
                <Col xs={6} md={8}>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Search"
                    onChange={e => setSearchTerm(e.target.value)}
                    style={{ flex: 1 }} />
                </Col>

                {/* Search Button */}
                <Col xs={6} md={2} >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={(e) => onSubmitText(e)}>
                    Search
                  </Button>
                </Col>
                
              </Row>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Video searchText={passToChild} />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
