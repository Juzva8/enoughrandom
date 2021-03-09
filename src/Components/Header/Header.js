import React from 'react'
import './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../Asets/logo.png';


function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <a href="/home" ClassName="Logo" rel="Home">
  <img  className = "img" src={logo} alt="Logo" />
  </a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
