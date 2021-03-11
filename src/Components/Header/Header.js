import React from 'react'
import './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../Assets/logo2.png';


function Header() {
    return (
        <div ClassName="header">
            <Navbar bg="light" expand="lg">
              <a href="/" ClassName="Logo" rel="Home">
  <img  ClassName = "img" src={logo} alt="Logo" />
  </a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav ClassName="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" ClassName="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
