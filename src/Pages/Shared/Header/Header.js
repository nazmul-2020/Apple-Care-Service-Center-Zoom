import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container">
                                    <a className="navbar-brand" href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse"
                                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <i className="bi bi-list"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                            <li className="nav-item"><a className="nav-link" href="/aboutUs">About Us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="" id="dropdown01"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carts <i
                                                        className="bi bi-bag"></i></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                                    <div className="cart-dropdown-box">
                                                        <i className="bi bi-cart3"></i>
                                                        <p>Your cart is empty</p>
                                                        <a href="" className="btn btn-primy login">Shop our products</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                            <li className="nav-item"><button className="btn btn-outline-primary login"><Link className='text-decoration-none' to='/login'>Login</Link></button></li>
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