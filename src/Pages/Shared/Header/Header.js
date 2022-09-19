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
                                            <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="dropdown01"
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
                                            <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
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
            <div class="hero-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 col-sm-12">
                            <div class="search-box-container text-center">
                                <ul class="nav">
                                    <li class="nav-item"><a class="active" data-toggle="tab" href="#service">SERVICE</a></li>
                                    <li class="nav-item"><a data-toggle="tab" href="#shop">SHOP</a></li>
                                </ul>

                                <div class="tab-content">
                                    <div id="service" class="container tab-pane active">
                                        <div class="searchBox">
                                            <div class="input-group form-label-group">
                                                <input type="text" id="searchService" class="form-control"
                                                    placeholder="Search By Service Type" onkeyup="showResult(this.value)"
                                                    required />
                                                <label for="searchService">Services</label>
                                                <div class="input-group-append">
                                                    <button class="btn" type="button"><i class="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-result searchServiceResult" style={{ display: "none" }}>
                                            <ul class="item-list serviceList">
                                                <li>
                                                    {/* <img src="img/iphone.jpg" alt=""> */}
                                                    <p>iPhone Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/ipad.jpg" alt=""> */}
                                                    <p>iPad Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/imac.jpg" alt=""> */}
                                                    <p>iMac Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/watch.jpg" alt=""> */}
                                                    <p>Watch Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/iphone-lock.jpg" alt=""> */}
                                                    <p>iPhone Unlock</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/battery-replacement.jpg" alt=""> */}
                                                    <p>Battery Replacement</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/rear-case.jpg" alt=""> */}
                                                    <p>Rear Case Replacement</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/liquid.jpg" alt=""> */}
                                                    <p>Liquid Damage</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- tab pane close --> */}
                                    <div id="shop" class="container tab-pane fade">
                                        <div class="searchBox">
                                            <div class="input-group form-label-group">
                                                <input type="text" id="searchShop" class="form-control"
                                                    placeholder="Search By Categories" onkeyup="showResult(this.value)"
                                                    required />
                                                <label for="searchShop">Products</label>
                                                <div class="input-group-append">
                                                    <button class="btn" type="button"><i class="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-result searchShopResult" style={{display:"none"}}>
                                            <ul class="item-list shopList">
                                                <li>
                                                    {/* <img src="img/iphone.jpg" alt=""> */}
                                                    <p>iPhone Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/ipad.jpg" alt=""> */}
                                                    <p>iPad Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/imac.jpg" alt=""> */}
                                                    <p>iMac Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/watch.jpg" alt=""> */}
                                                    <p>Watch Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/iphone-lock.jpg" alt=""> */}
                                                    <p>iPhone Unlock 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/battery-replacement.jpg" alt=""> */}
                                                    <p>Battery Replacement 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/rear-case.jpg" alt=""> */}
                                                    <p>Rear Case Replacement2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/liquid.jpg" alt=""> */}
                                                    <p>Liquid Damage 2</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- tab pane close --> */}
                                </div>
                            </div>
                            {/* <!-- Search box container close --> */}
                        </div>
                    </div>
                    {/* <!-- Row close --> */}
                </div>
                {/* <!-- Container close --> */}
            </div>
            {/* <!-- Hero area close --> */}
        </div>
    );
};

export default Header;