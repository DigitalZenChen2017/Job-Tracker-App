import React from 'react';
import Logo from '../images/JobTracker-Logo-Transparent.png';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const NavBar = ({ icon, title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img style={logoResponsive} src={Logo} alt="Job Tracker Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Application</Nav.Link>
          <Nav.Link href="/contact">Get In Touch With Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

const logoResponsive = {
  maxHeight: '125px',
  maxWidth: '125px',
};

export default NavBar;
