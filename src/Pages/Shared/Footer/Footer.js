import React from 'react';
import { AiFillTwitterCircle, AiOutlineHome, } from "react-icons/ai";
import { HiMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import zoomit from '../../../assets/Images/zoom.png'
import './Footer.css'
import { Icon } from '@iconify/react';
import { Nav, Navbar } from 'react-bootstrap';
import { GrShop } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className=''>
            <footer className='footer '>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-lg-4 col-md-6 col-12  g-4'>
                            <div className=''>
                                <h5>About Us</h5>
                                <p className=''>iCare Apple BD is the leading Apple service center in Bangladesh. We gained our reputation in this service by providing the best solution.</p>
                                <div className='mb-1'>
                                    <BsFacebook className=' footer-icon' />
                                    <AiFillTwitterCircle className='footerIcon' />
                                    <Icon icon="entypo-social:linkedin-with-circle" className='footerIcon' />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-12 bg- g-4 '>
                            <h6>ORDER</h6>
                            <p className='mb-0'>My Account</p>
                            <p className='mb-0'>View Cart</p>
                            <p className='mb-0'>Wishlist</p>
                            <p className='mb-0'>Shopping Cart</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-12 g-4'>
                            <h6> CONTACT US</h6>
                            <p className='mb-0'><HiMail className='footer-icon' /> iCareApple@gmail.com  </p>
                            <p className='mb-0'><BsFillTelephoneFill className='footer-icon' />  01722987867</p>
                            <p className='mb-0'><ImLocation className='footer-icon' /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        </div>
                    </div>
                </div>

                <div className='copy-write pt-2 mt-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col col-md-6 col-lg-6 text-start'>
                                <p>Copyright &copy; 2021 iCare Apple . All Rights Reserved.</p>
                            </div>
                            <div className='col col-md-6 col-6 text-end '>
                                <span className=''>DEVELOPED BY | </span>
                                <img width='80' height='20' src={zoomit} alt="sssss" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <nav class="navbar navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            </footer>


            <Navbar className='header-area d-lg-none d-md-none p-0 fixed-bottom' variant="light">
                <Nav className="mx-auto">
                    <Nav.Link href="/" className='text-center'>
                        <span className='m-0'><AiOutlineHome className='f-mu-icon' /></span>
                        <p className='m-0'>Home</p>
                    </Nav.Link>

                    <Nav.Link href="/cart" className='text-center'>
                        <span className='m-0'><GrShop className='f-mu-icon' /></span>
                        <p className='m-0'>Cart</p>
                    </Nav.Link>

                    <Nav.Link href="/shop" className='text-center'>
                        <span className='m-0'><Icon icon="icon-park-outline:like" className='f-mu-icon' /></span>
                        <p className='m-0'>Shop</p>
                    </Nav.Link>


                </Nav>
            </Navbar>
        </div>
    );
};

export default Footer;