import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Bell } from 'react-bootstrap-icons';
import '../styles/NavBar.css';
import profile from'../assets/profile.jpg'

const Header=()=> {
  return (
    <Navbar bg="light" expand="lg" className="px-3 header">
      <Container>
        <Navbar.Brand href="#home" className="header-logo">
          <span>Fickle</span>
          <span>Flight</span>
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#explore" className="nav-link-explore">Explore</Nav.Link>
          <Nav.Link href="#search">Search</Nav.Link>
          <Nav.Link href="#hotels">Hotels</Nav.Link>
          <Nav.Link href="#offers">Offers</Nav.Link>

          <Nav.Link href="#notifications" className="position-relative mx-2">
            <Bell size={20} />
            <span className="notification-badge" />
          </Nav.Link>

          <Nav.Link href="#profile">
            <img
              src={profile}
              alt="Profile"
              className="profile-img"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;