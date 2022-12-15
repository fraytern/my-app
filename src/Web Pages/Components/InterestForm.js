import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function InterestForm() {
  return (
    <div>
    <h4 className='mb-3'>Get in Touch!</h4>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirst">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLast">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="password" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control placeholder="abc123@georgetown.edu" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Message</Form.Label>
        <Form.Control placeholder="Write your message here" />
      </Form.Group>

      <Button id="formButton" className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default InterestForm;