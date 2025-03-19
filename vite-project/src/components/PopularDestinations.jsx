import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/PopularDestinations.css'; 
import ParisImage from'../assets/ParisImage.png'
import GreeceImage from'../assets/GreeceImage.png'
import NorwayImage from'../assets/NorwayImage.png'
import TuscanyImage from'../assets/TuscanyImage.png'


const PopularDestinations = () => {
  const destinations = [
    {
      name: 'Paris',
      price: '$699',
      image: ParisImage,
    },
    {
      name: 'Greece',
      price: '$1079',
      image: GreeceImage,

    },
    {
      name: 'Norway',
      price: '$895',
      image: NorwayImage, // Norway image
    },
    {
      name: 'Tuscany',
      price: '$1245',
       image:TuscanyImage , // Tuscany image
    },
  ];

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="text-primary">PLAN YOUR NEXT TRIP</h5>
          <h4>Most Popular Destinations</h4>
        </div>
        <a  className="text-primary">
          View all destinations →
        </a>
      </div>
      <Row>
        {destinations.map((destination, index) => (
          <Col xs={12} md={3} key={index} className="mb-3">
            <Card className="destination-card">
              <div
                className="destination-image"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="destination-overlay">
                  <h5>{destination.name}</h5>
                  <h3 className="price">FROM {destination.price}</h3>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDestinations;