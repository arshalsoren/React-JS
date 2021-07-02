import logo from './logo.svg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import Video from './Video/Video';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search" />
              </Col>
              <Col xs={3} md={3}>
                <Button
                  variant="primary"
                  size="lg">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form></Col>
      </Row>
      <Row>
        <Video />
      </Row>
    </Container>
  );
}

export default App;
