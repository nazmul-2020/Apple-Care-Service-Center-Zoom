import React from 'react';
import logo from '../../../assets/Images/logo.png';
import { AiFillHome } from "react-icons/ai";
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneInboundFill, } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-4'>
            <footer className='footer'>
                <div className='container'>
                <div className='row g-4'>
                    <div className='col-lg-3 col-md-6 col-12  g-4'>
                        <div className='d-flex align-items-center'>
                            <img
                                alt=""
                                src={logo}
                                width="20"
                                height="28"
                                className="d-inline-block align-top"
                            />{' '}
                            <div className='ms-2'>
                                <h5 className='fw-bold m-0'>iCare Apple</h5>
                            </div>
                        </div>
                        <div className=''>
                            <div className='d-flex justify-content-between mt-3'>
                                <div>
                                    <p className='mb-0'>About US</p>
                                    <p className='mb-0'>Out Team</p>
                                    <p className='mb-0'>Blog</p>
                                </div>
                                <div>
                                    <p className='mb-0'>Our story</p>
                                    <p className='mb-0'>FAQs</p>
                                    <p className='mb-0'>Contact Us</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 g-4'>
                        <h6>WE REPAIR</h6>
                        <p className='mb-0'>Most iPhones, iPads and iPods</p>
                        <p className='mb-0'>Screen Replacement</p>
                        <p className='mb-0'>Battery Replacement</p>
                        <p className='mb-0'>Home Button</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 bg- g-4 '>
                        <h6>WE REPAIR</h6>
                        <p className='mb-0'>Speaker Repair</p>
                        <p className='mb-0'>Port Repair</p>
                        <p className='mb-0'>Camera Repair</p>
                        <p className='mb-0'>Visit our pricing page for model specific details.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 g-4 text-end'>
                        <p className='mb-0'><AiFillHome className='me-1'/> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                        <p className='mb-0'><HiMail className='me-1'/> <span className='fw-bold'>Official:</span> iCareApple@gmail.com  </p>
                        <p className='mb-0 '><BsFillTelephoneInboundFill className='me-1'/> <span className='fw-bold'>Helpline</span> : 01722987867 (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    </div>

                </div>
                <div>

                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;