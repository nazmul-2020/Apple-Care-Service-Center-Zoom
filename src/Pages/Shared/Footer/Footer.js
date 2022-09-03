import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import logo from '../../../assets/Images/logo.png'

const Footer = () => {
    return (
        <div className='my-5'>
            <h1>Footer</h1>
            <footer className='container'>
                <div className='row g-4'>
                    <div className='col-lg-3 col-md-6 col-12  g-4'>
                        <div className='d-flex align-items-center'>
                            <img
                                alt=""
                                src={logo}
                                width="70"
                                height="78"
                                className="d-inline-block align-top"
                            />{' '}
                            <div className='ms-2'>
                                <h3 className='fw-bold m-0'>iCare Apple</h3>
                                <p className='m-0'><small>The Best Apple Fix Eve</small></p>
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
                            <div className='mt-3'>
                                <p><small>890 Dhaka. Mohammadpur, Rd No.07</small></p>
                                <p className='mb-0'><small>740-525-5705</small></p>
                                <p><small>info@thezoomit.com</small></p>
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
                        <h6>STAY IN TOUCH</h6>
                        <p>Receive 15% off your first order. Be the first to see what's new and exclusive offers.</p>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="username@site.com"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="baic-addon2"  className='btn btn-outline-dark' >Subscribe</InputGroup.Text>
                        </InputGroup>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;