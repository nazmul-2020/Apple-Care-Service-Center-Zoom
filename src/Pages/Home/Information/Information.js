import React from 'react';
import laptop from '../../../assets/Icon/laptop.png'
import mobilePh from '../../../assets/Icon/mobile-phone 1.png'
import monitor from '../../../assets/Icon/monitor 1.png'
import watch from '../../../assets/Icon/watch.png'
import tablet from '../../../assets/Icon/tablet-device 3.png'
import { Link } from "react-router-dom";
import './Information.css'
// import { IoIosLaptop } from "@react-icons/all-files/fa/IoIosLaptop";

const Information = () => {
    return (
        <div className='my-5 overlay'>
            <div className=' informationBanner'>
                <div className='py-5 overlay'>
                    <div className='container'>
                        <div className='text-center w-50 mx-auto text-white'>
                            <h1>Product Service and Repair Information</h1>
                            <p>Learn more about what’s covered under your warranty, costs for repair outside of warranty, and more for your specific Apple product.</p>
                        </div>

                        <div>
                            <div className="row g-3 mt-3">
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <Link to='/iPhone' className='text-decoration-none'>
                                                <img width='70' height='70' className='d-block mx-auto' src={mobilePh} alt="" />
                                                <small className='fw-bold text-dark'>iPhone</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <Link className='text-decoration-none' to='/macBook'>
                                                <img width='70' height='70' className='d-block mx-auto' src={laptop} alt="" />
                                                <small className='fw-bold text-dark'>iMacBook</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <Link to='/iMac' className='text-decoration-none'>
                                                <img width='70' height='70' className='d-block mx-auto' src={monitor} alt="" />
                                                <small className='fw-bold text-dark'>iMac</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <Link to='/watch' className='text-decoration-none'>
                                                <img width='70' height='70' className='d-block mx-auto' src={watch} alt="" />
                                                <small className='fw-bold text-dark'>Watch</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">

                                        <div className="card-body text-center">
                                            <Link to='/iPad' className='text-decoration-none'>
                                                <img width='70' height='70' color className='d-block mx-auto' src={tablet} alt="" />
                                                <small className='fw-bold text-dark'>iPad</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-md-3 col-lg-2">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <Link to='/iPhoneUnlock' className='text-decoration-none'>
                                                <img width='70' height='70' className='d-block mx-auto' src={laptop} alt="" />
                                                <small className='fw-bold text-dark'>iPhone Unlock</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;