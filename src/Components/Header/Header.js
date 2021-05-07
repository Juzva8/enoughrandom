import React, { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';


function Header() {

const [collapsed, setCollapsed] = useState(true);
const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="header">
<Navbar color="faded" light>
<NavLink className="header__home" href="/">BROWS JUNGLE</NavLink>
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    <Collapse isOpen={!collapsed} navbar>
      <Nav navbar>
          <NavItem>
          <NavLink id="nav__item" href="/about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink id="nav__item" href="/consent-forms">Consent Forms</NavLink>
        </NavItem>
        <NavItem>
          <NavLink id="nav__item" href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
        </div>
    )
}

export default Header
