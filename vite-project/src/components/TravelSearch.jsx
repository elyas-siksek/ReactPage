import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlane, FaHotel, FaTicketAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from 'react-icons/fa';
import '../styles/TravelSearch.css'; 

const TravelSearch = () => {
  return (
    <Container className="my-4">
      <h5 className="text-muted mb-3">RECENT SEARCHES</h5>
      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-3 mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <strong>SIN</strong>
              </Col>
              <Col xs={6} className="text-center">
                <FaPlane className="text-primary" />
                <div className="d-flex justify-content-center">
                  <span className="dot"></span>
                  <span className="line"></span>
                  <span className="dot"></span>
                </div>
              </Col>
              <Col xs={3}>
                <strong>LAX</strong>
              </Col>
            </Row>
            <div className="text-center mt-2">
              <small>Depart On: 7 Sep 2021</small>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <Row className="align-items-center">
              <Col xs={3}>
                <strong>MY</strong>
              </Col>
              <Col xs={6} className="text-center">
                <FaPlane className="text-primary" />
                <div className="d-flex justify-content-center">
                  <span className="dot"></span>
                  <span className="line"></span>
                  <span className="dot"></span>
                </div>
              </Col>
              <Col xs={3}>
                <strong>DUB</strong>
              </Col>
            </Row>
            <div className="text-center mt-2">
              <small>Depart On: 9 Sep 2021</small>
            </div>
          </Card>
        </Col>
      </Row>

      <h5 className="text-muted mb-3">PREPARE FOR YOUR TRIP</h5>
      <Row>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option hotel">
            <FaHotel size={30} />
            <div>Hotel</div>
          </Button>
        </Col>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option attractions">
            <FaTicketAlt size={30} />
            <div>Attractions</div>
          </Button>
        </Col>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option eats">
            <FaUtensils size={30} />
            <div>Eats</div>
          </Button>
        </Col>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option commute">
            <FaBus size={30} />
            <div>Commute</div>
          </Button>
        </Col>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option taxi">
            <FaTaxi size={30} />
            <div>Taxi</div>
          </Button>
        </Col>
        <Col xs={4} md={2} className="text-center mb-3">
          <Button variant="light" className="trip-option movies">
            <FaFilm size={30} />
            <div>Movies</div>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelSearch;