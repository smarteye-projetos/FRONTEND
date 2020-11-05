import React from 'react';

// import { Container } from './styles';

import {Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (<>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Smarteye</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Câmeras</Nav.Link>
          <Nav.Link href="#pricing">Projeto 1</Nav.Link>
          <Nav.Link href="#deets">Projeto 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>);
}

export default Header;