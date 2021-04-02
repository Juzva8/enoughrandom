import React, { useState } from 'react';
import './Header.css'
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../Assets/logo2.png';

function Header() {

const [collapsed, setCollapsed] = useState(true);
const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="header">


<Navbar color="faded" light>
<a href="/" className="Logo" rel="Home">
  <img  className = "img" src={logo} alt="Logo" />
  </a>
  
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    <Collapse isOpen={!collapsed} navbar>
      <Nav navbar>
      <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/gallery">Gallery</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>

      </Nav>
    </Collapse>
  </Navbar>


        </div>
    )
}

export default Header
