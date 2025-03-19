

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/PopularStays.css';
import Matterhorn from'../assets/Matterhorn.png';
import DiscoveryShoresImage from'../assets/DiscoveryShoresImage.png'
import ArcticHutImage from'../assets/ArcticHutImage.png'

import LakeLouiseImage from'../assets/LakeLouiseImage.png'

const PopularStays = () => {
  const stays = [
    {
      name: 'Matterhorn Suites',
      price: '$575/night',
      rating: 4.9,
      reviews: 60,
      image: Matterhorn, 
    },
    {
      name: 'Discovery Shores',
      price: '$360/night',
      rating: 4.8,
      reviews: 116,
      image: DiscoveryShoresImage, 
    },
    {
      name: 'Arctic Hut',
      price: '$420/night',
      rating: 4.7,
      reviews: 78,
      image: ArcticHutImage, 
    },
    {
      name: 'Lake Louise Inn',
      price: '$244/night',
      rating: 4.6,
      reviews: 63,
      image: LakeLouiseImage
    },
  ];

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Popular Stays</h4>
        <a  className="text-primary">
          View all stays →
        </a>
      </div>
      <Row>
        {stays.map((stay, index) => (
          <Col xs={12} md={3} key={index} className="mb-3">
            <Card className="stay-card">
              <div className="stay-image-wrapper">
                <img src={stay.image} alt={stay.name} className="stay-image" />
                <div className="play-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#007bff" />
                    <polygon points="10 8 16 12 10 16" fill="white" />
                  </svg>
                </div>
              </div>
              <Card.Body>
                <Card.Text className="text-muted text-uppercase small">
                  Entire Bungalow
                </Card.Text>
                <Card.Title>{stay.name}</Card.Title>
                <Card.Text className="price">{stay.price}</Card.Text>
                <div className="d-flex align-items-center mb-2">
                  <FaStar className="text-warning" />
                  <span className="ms-1">{stay.rating} ({stay.reviews} reviews)</span>
                </div>
                <Button variant="outline-primary" size="sm">
                  More Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularStays;