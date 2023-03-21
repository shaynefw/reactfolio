import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../style/Contact.css';

const Contact = () => {
  const [name, setName] = useState(''); // Track the name field.
  const [email, setEmail] = useState(''); // Track the email field.
  const [message, setMessage] = useState(''); // Track the message field.
  const [nameTouched, setNameTouched] = useState(false); // Track if the name field has been touched.
  const [emailTouched, setEmailTouched] = useState(false); // Track if the email field has been touched.
  const [messageTouched, setMessageTouched] = useState(false); // Track if the message field has been touched.

  const handleSubmit = (e) => { // Handle the form submission.
    e.preventDefault(); // Prevent the form from submitting.
    // Send the form data to your email here
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-form">
            <h2>Contact</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  onBlur={() => setNameTouched(true)} // Set the nameTouched state to true when the field is blurred.
                  isInvalid={nameTouched && name === ''}  
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  isInvalid={emailTouched && email === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setMessageTouched(true)}
                  isInvalid={messageTouched && message === ''}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

