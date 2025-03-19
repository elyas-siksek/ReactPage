import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/WeeklyUpdates.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-section">
      <Container className="py-5 text-center">
        <h5 className="text-primary">SUBSCRIBE TO OUR NEWSLETTER</h5>
        <h4>Get weekly updates</h4>
        <div className="newsletter-form mx-auto mt-4">
          <p>Fill in your details to join the party!</p>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Button variant="warning" type="submit" className="submit-btn">
              SUBMIT
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;