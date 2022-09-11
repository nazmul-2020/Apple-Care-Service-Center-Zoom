import React from 'react';
import { Link } from 'react-router-dom';
import iphone_13 from '../../../../../assets/Images/iPhoneRepair/iphone-13-pro-max.png'
import { BiArrowBack } from "react-icons/bi";
import './IPhoneId.css'

const IPhoneId = () => {
    return (
        <div className='my-5'>
            <div className='iPhoneBanner'>
                <div className='overlay d-flex align-items-center justify-content-center h-100'>
                    <div className='text-white text-center'>
                        <h4>iPhone Repair</h4>
                        <span><Link className='text-white fw-bold text-decoration-none' to='/'>Back Home</Link></span>
                        <span className='text-white fw-bold mx-1 '>/</span>
                        <span><Link className='text-white fw-bold text-decoration-none' to='/iPhone'>Back iPhone Repair</Link></span>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className='text-center pt-3'>
                    <h4 className='text-info '>iPhone 13 Pro Max Repair & Service Lists</h4>
                    <p>Choose the appropriate repair issue for iPhone 13 Pro Max</p>
                </div>
                <div className='row g-3 my-3 py-2 bg-light mx-auto w-75'>
                    <div className='col-6 col-md-6 col-lg-3 '>
                        <div>
                            <img className='d-block mx-auto' height='180' src={iphone_13} alt="" />
                        </div>
                    </div>
                    <div className='col-6 col-md-6 col-lg-6 '>
                        <div>
                            <li>iPhone 13 Pro Max Released 2021, September 24</li>
                            <li>Li-Ion 4352 mAh, non-removable (16.75 Wh) Fast charging 27W, 50% in 30 min (advertised) USB</li>
                            <li>Power Delivery 2.0 MagSafe wireless charging 15W Qi magnetic fast wireless charging 7.5W</li>
                            <li>Li-Ion</li>
                            <li>Apple A15 Bionic</li>
                        </div>
                    </div>
                    <div className='col-6 col-md-6 col-lg-3 '>
                        <div className='text-center'>
                            <p className='p-2 iphoneP fw-bold'>1284x2778 pixels</p>
                            <p className='p-2 iphoneP fw-bold'>6.7"</p>
                            <p className='p-2 iphoneP fw-bold'>2160p</p>
                            <p className='p-2 iphoneP fw-bold'>6GB RAM</p>
                            <p className='p-2 iphoneP fw-bold'>4352mAh</p>
                        </div>
                    </div>
                </div>
                
                <h4 className='w-75 mx-auto mt-4 '><Link className='text-info' to='/iPhone'><BiArrowBack className=''/><span className='ms-2' >Back</span></Link></h4>
            </div>
        </div>
    );
};

export default IPhoneId;