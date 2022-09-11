import React from 'react';
import { Link } from 'react-router-dom';
import iphone_13 from '../../../../../assets/Images/iPhoneRepair/iphone-13-pro-max.png'
import { BiArrowBack } from "react-icons/bi";
import './IPhoneId.css'
import Battery_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Battery_Replacement.png'
import Display_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Display_Replacement.png'
import Back_Glass_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Back_Glass_Replacement.png'
import Charging_Dock_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Charging_Dock_Replacement.png'
import Cleaning_Service from '../../../../../assets/Images/iPhoneRepair/one/Cleaning_Service.png'
import Ear_Speaker_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Ear_Speaker_Replacement.png'
import Face_ID_issue from '../../../../../assets/Images/iPhoneRepair/one/Face_ID_issue.png'
import Front_Camera_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Front_Camera_Replacement.png'
import Mic_Issue from '../../../../../assets/Images/iPhoneRepair/one/Mic Issue.png'
import Proximity_Sensor_Replacement from '../../../../../assets/Images/iPhoneRepair/one/Proximity Sensor Replacement.png'


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
                <div className='mt-5'>
                    <h4 className='w-75 ms-3 mb- mt-4 '><Link className='text-info' to='/iPhone'><BiArrowBack className='' /><span className='ms-2' >Back</span></Link></h4>
                    <div className='row g-3'>
                        <div className='col col-md- col-lg-2 '>
                            <div className='bg-i text-center'>
                                <p className='p-2 fw-bold iphoneP'>iPhone 13 Pro Max</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 13 Pro</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 13</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 13 Mini</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 12 Pro Max</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 12 Pro</p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 12 </p>
                                <p className='p-2 fw-bold iphoneP'>iPhone 12 Mini</p>
                            </div>
                        </div>
                        <div className='col col-md- col-lg-10'>
                            <div className='row g-2'>
                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Battery_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Battery Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Display_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Display Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Back_Glass_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Back Glass Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Charging_Dock_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Charging Dock Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Cleaning_Service} alt="" />
                                            <h6 className='text-center mt-3'>Cleaning Service</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Ear_Speaker_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Ear Speaker Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Face_ID_issue} alt="" />
                                            <h6 className='text-center mt-3'>FaceID issue</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Front_Camera_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Front Camera Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Display_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Upper Glass Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Mic_Issue} alt="" />
                                            <h6 className='text-center mt-3'>Mic Issue</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Proximity_Sensor_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Proximity Sensor Replacement</h6>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-info '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Battery_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Battery Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IPhoneId;