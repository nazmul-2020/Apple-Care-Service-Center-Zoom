import React from 'react';
import { Link } from 'react-router-dom';
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
import Apple_iPhone_13Blue from '../../../../../assets/Images/Apple_iPhone_13Blue.png'


const IPhoneId = () => {
    return (
        <div className='my-5'>
            <div className='iphoneDetails'>
                <div className='overlay h-100'>
                    <div className='container pt-5 '>
                        <h4 className='text-center text-info'>iPhone 13 Pro Max Repair & Service Lists</h4>
                        <div className='row g-4 mt-2'>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='text-white fw-bold'>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>iPhone 13 Pro Max Released 2021, September 24</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Li-Ion 4352 mAh, non-removable (16.75 Wh) Fast charging 27W, 50% in 30 min (advertised) USB</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Power Delivery 2.0 MagSafe wireless charging 15W Qi magnetic fast wireless charging 7.5W</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Li-Ion</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Apple A15 Bionic</p>
                                </div>
                            </div>

                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className=''>
                                    <img className='d-block mx-auto' height='300' src={Apple_iPhone_13Blue} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                {/* <div className='text-center pt-3'>
                    <h4 className='text-inf '>iPhone 13 Pro Max Repair & Service Lists</h4>
                    <p>Choose the appropriate repair issue for iPhone 13 Pro Max</p>
                </div> */}

                <div className='mt-3'>
                    <h6 className='w-75 ms-3 mb- mt-4 '><Link className='text-info' to='/iPhone'><BiArrowBack className='' /><span className='ms-2' >Back</span></Link></h6>
                    <div className='row g-3'>
                        <div className='col col-md- col-lg-2 '>
                            <div className=''>
                                <Link className='text-decoration-none text-dark' to='/iphoneDetails' >
                                    <p className='p-2 fw-bold iphoneP'>iPhone 13 Pro Max</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 13 Pro</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 13</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 13 Mini</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 12 Pro Max</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 12 Pro</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 12</p>
                                </Link>
                                <Link className='text-decoration-none text-dark' to='/'>
                                    <p className='p-2 fw-bold iphoneP'>iPhone 12 Mini</p>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md- col-lg-10'>
                            <div className='row g-2'>
                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/iPhoneBattery'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Battery_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Battery Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Display_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Display Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Back_Glass_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Back Glass Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Charging_Dock_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Charging Dock Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Cleaning_Service} alt="" />
                                            <h6 className='text-center mt-3'>Cleaning Service</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Ear_Speaker_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Ear Speaker Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Face_ID_issue} alt="" />
                                            <h6 className='text-center mt-3'>FaceID issue</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Front_Camera_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Front Camera Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Display_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Upper Glass Replacement</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='120' src={Mic_Issue} alt="" />
                                            <h6 className='text-center mt-3'>Mic Issue</h6>
                                        </div>
                                    </Link>
                                </div>

                                <div className='col-col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
                                            <img className='d-block mx-auto ' width='100' height='100' src={Proximity_Sensor_Replacement} alt="" />
                                            <h6 className='text-center mt-3'>Proximity Sensor Replacement</h6>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col- col-md-6 col-lg-2'>
                                    <Link className='text-decoration-none text-dark' to='/'>
                                        <div className='bg-light shadow p-1 border border-warning '>
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