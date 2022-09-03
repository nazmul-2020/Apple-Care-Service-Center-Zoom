import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/Images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar href="/" className='fw-bold'>
                        <img
                            alt=""
                            src={logo}
                            width="70"
                            height="78"
                            className="d-inline-block align-top"
                        />{' '}
                        <div className='ms-2'>
                            <h1 className='fw-bold m-0'>iCare Apple</h1>
                            <p className='m-0'><small>The Best Apple Fix Eve</small></p>
                        </div>
                    </Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#link">Contact Us</Nav.Link>
                            <Nav.Link href="#home">Carts</Nav.Link>
                            <Nav.Link href="#home">Blog</Nav.Link>
                            <Nav.Link href="#link" className=''>Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;