import React from 'react';
import {AiFillTwitterCircle } from "react-icons/ai";
import { HiMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';
import { BsFacebook, BsFillTelephoneFill,BsLinkedin, } from 'react-icons/bs';
import zoomit from '../../../assets/Images/zoom.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-4 text-center'>
            <footer className='footr'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-lg-4 col-md-6 col-12  g-4'>
                            <div className=''>
                                <h5>About Us</h5>
                                <p>iCare Apple BD is the leading Apple service center in Bangladesh. We gained our reputation in this service by providing the best solution.</p>
                                <div>
                                <BsFacebook className='m-1 footer-icon'/>
                                <AiFillTwitterCircle className='m-1 footer-icon'/>
                                <BsLinkedin className='m-1 footer-icon'/>
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
                            <p className='mb-0'><BsFillTelephoneFill className='footer-icon'/>  01722987867</p>
                            <p className='mb-0'><ImLocation className='footer-icon' /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
                <hr />
                <div className='container'>
                <div className='row'>
                   <div className='col col-md-6 col-lg-6 text-start'>
                   <p>Copyright © 2021 iCare Apple . All Rights Reserved.</p>
                   </div>
                    <div className='col col-md-6 col-6 text-end '>
                    <span className=''>DEVELOPED BY | </span>
                    <img width='80' height='20' src={zoomit} alt="sssss" />
                    </div>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;