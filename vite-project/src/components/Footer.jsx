import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-3">
          <Col md={5} className="mb-3 mb-md-0 description-col">
            <h4 className="footer-logo">FickleFlight</h4>
            <p>
              Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </Col>

          <Col md={1} className="d-none d-md-block"></Col>

          <Col md={2} className="mb-3 mb-md-0">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">How we work</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-3 mb-md-0">
            <h5>Support</h5>
            <ul className="footer-links">
              <li><a href="#">Account</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5>More</h5>
            <ul className="footer-links">
              <li><a href="#">Covid Advisory</a></li>
              <li><a href="#">Airline Fees</a></li>
              <li><a href="#">Tips</a></li>
              <li><a href="#">Quarantine Rules</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;