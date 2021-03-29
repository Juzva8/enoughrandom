import React from 'react'
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Assets/logo2.png';


function Header() {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <a href="/" className="Logo" rel="Home">
  <img  className = "img" src={logo} alt="Logo" />
  </a>
    <Nav className="header__options">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
