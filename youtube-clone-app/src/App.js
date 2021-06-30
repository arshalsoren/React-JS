import logo from './logo.svg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Search" />
            </Col>
            <Col>
              <Button variant="primary" size="lg">Search</Button>
            </Col>
          </Form.Row>
        </Form>
      </Row>
      <Row>
        <Col xs={12} lg={4}>Single Video</Col>
        <Col xs={12} lg={4}>Suggestions</Col>
      </Row>
    </Container>
  );
}

export default App;
