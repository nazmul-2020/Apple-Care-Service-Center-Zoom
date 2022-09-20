import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <Navbar bg="light fixed-top" expand="lg">
                <Container>

                    <Navbar.Brand className='fw-bold' href="/">
                        <img
                            alt=""
                            src={logo}
                            width="20"
                            height="28"
                            className="d-inline-block align-top"
                        />{' '}
                        iCare Apple
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="#home">Carts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="#link" className=''>Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <div class="header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-lg">
                                <div class="container">
                                    <a class="navbar-brand" href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                    <button class="navbar-toggler border-0" type="button" data-toggle="collapse"
                                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <i class="bi bi-list"></i>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav ms-auto">
                                            <li class="nav-item"><a class="nav-link" href="/aboutUs">About Us</a></li>
                                            <li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="" id="dropdown01"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carts <i
                                                        class="bi bi-bag"></i></a>
                                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                                    <div class="cart-dropdown-box">
                                                        <i class="bi bi-cart3"></i>
                                                        <p>Your cart is empty</p>
                                                        <a href="" class="btn btn-primary login">Shop our products</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                                            <li class="nav-item"><button class="btn btn-primary login">login</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                    {/* <!-- Row close --> */}
                </div>
                {/* <!-- Container close --> */}
            </div>
            {/* <!-- Header area close --> */}
            
            
            {/* <!-- Hero area close --> */}
        </div>
    );
};

export default Header;