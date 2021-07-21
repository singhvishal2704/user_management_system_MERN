import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ShunyEka</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
          <LinkContainer to='/adduser'>
                <Nav.Link>
                  <Button variant="outline-success">Add User</Button>{' '}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/edituser'>
                <Nav.Link>
                  <Button variant="outline-success">Edit User</Button>{' '}
                </Nav.Link>
              </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
