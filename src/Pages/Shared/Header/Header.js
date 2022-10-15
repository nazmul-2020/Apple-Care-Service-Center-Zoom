import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
import Liquid from '../../../assets/img/liquid.jpg'
import iphone from '../../../assets/img/iphone.jpg'
import ipad from '../../../assets/img/ipad.jpg'
import imac from '../../../assets/img/imac.jpg'
import Watch from '../../../assets/img/watch.jpg'
import Unlock from '../../../assets/img/iphone-lock.jpg'
import Battery from '../../../assets/img/battery-replacement.jpg'
import rear from '../../../assets/img/rear-case.jpg'
// import Liquid from '../../../assets/img/liquid.jpg'

import './Header.css'

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            {/* <Navbar bg="light" expand="lg">
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
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                                {/* <div className="search-result searchServiceResult" style={{ background: "rgba(255, 255, 255, 0.100)" }}
                                            >
                                                <ul className="item-list serviceList">
                                                    <li><Link to='/iPhone'>
                                                        <img className='rounded' src={Liquid} alt="" />
                                                        <p>iPhone Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/iPad'>
                                                        <img src={Liquid} alt="" />
                                                        <p>iPad Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/macBook'>
                                                        <img src={Liquid} alt="" />
                                                        <p>iMac Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/watch'>
                                                        <img src={Liquid} alt="" />
                                                        <p>Watch Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img src={Liquid} alt="" />
                                                        <p>iPhone Unlock 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'> */}
                                                        {/* <img src={Battery} alt="" /> */}
                                                        {/* <p>Battery Replacement 2</p> */}
                                                    {/* </Link></li> */}

                                                    {/* <li><Link to='/'> */}
                                                        {/* <img src={rear} alt="" />
                                                        <p>Rear Case Replacement2</p>
                                                    </Link></li>

                                                    <li><Link to='/'> */}
                                                        {/* <img src={Liquid} alt="" /> */}
                                                        {/* <p>Liquid Damage 2</p>
                                                    </Link></li>
                                                </ul>
                                            </div>
                            </NavDropdown>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="#home">Carts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="#link" className=''>Log In</Nav.Link>
                        </Nav> */}
                    {/* </Navbar.Collapse>
                </Container>
            </Navbar>  */}

            <div className="header-area  sticky-top">
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
                                            <li onClick={() => setShow(!show)} className="nav-item nav-link">
                                                {/* <a className="nav-link" href="/aboutUs">Service</a> */}
                                            Service</li>
                                            <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="/aboutUs">About Us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                                            <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="/cart" id="dropdown01"
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
                                            <li className="nav-item"><button className="btn btn-outline-primary login"><Link className='text-decoration-none text-dark' to='/login'>Login</Link></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                                    {show ?
                                            <div className="search-result searchServiceResult service w-50 mx-auto" style={{ background: "rgba(255, 255, 255, 0.500)" }}
                                            >
                                                <ul className="item-list serviceList">
                                                    <li><Link to='/iPhone'>
                                                        <img className='rounded' src={iphone} alt="" />
                                                        <p>iPhone Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/iPad'>
                                                        <img className='rounded' src={ipad} alt="" />
                                                        <p>iPad Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/macBook'>
                                                        <img className='rounded' src={imac} alt="" />
                                                        <p>iMac Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/watch'>
                                                        <img className='rounded' src={Watch} alt="" />
                                                        <p>Watch Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img className='rounded' src={Unlock} alt="" />
                                                        <p>iPhone Unlock 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img className='rounded' src={Battery} alt="" />
                                                        <p>Battery Replacement 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img className='rounded' src={rear} alt="" />
                                                        <p>Rear Case Replacement2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img className='rounded' src={Liquid} alt="" />
                                                        <p>Liquid Damage 2</p>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                            : null}
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