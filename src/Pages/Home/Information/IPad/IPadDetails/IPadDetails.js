import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './IPadDetails.css'
import iPad from '../../../../../assets/Images/iPhoneRepair/one/iPad8,4.png'
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

const IPadDetails = () => {
    return (
        <div className='mt-5'>
            <div className='iphoneDetails'>
                <div className='overlay h-100'>
                    <div className="container pt-5">
                        <h4 className='text-center w-75 text-info mx-auto'>iPad Pro 10.5-inch (1st Gen 2017) Repair & Service Lists</h4>
                        <div className='row mt-4 w-75 mx-auto '>
                            <div className="col col-md-6 col-lg-6 b-dark">
                                <div className='text-white fw-bold'>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>iPad Pro 10.5-inch (1st Gen 2017) released 2017, June</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Li-Ion 8134 mAh, non-removable (30.8 Wh)</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Up to 10 h (multimedia)</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Li-Ion</p>
                                    <p className='border-start border-warning mb-2 border-2 bo ps-2'>Apple A10X Fusion</p>
                                </div>
                            </div>
                            <div className="col col-md-6 col-lg-6">
                                <div>
                                    <img className='d-block mx-auto' src={iPad} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h6 className='w-75 ms-3 mb- mt-4 '><Link className='text-info' to='/iPad'><BiArrowBack className='' /><span className='ms-2' >Back</span></Link></h6>
                <div className='row g-3'>
                    <div className='col col-md- col-lg-2 '>
                        <div className='text-centr'>
                            <Link className='text-decoration-none text-dark' to='/iphoneDetails' >
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 11-Inch (3rd Gen 2021)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 4 12.9-Inch (4th Gen 2020)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 11-Inch (1st Gen 2018) (2nd Gen 2020)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 3 12.9-Inch (3rd Gen 2018)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 2 12.9-Inch (2nd Gen 2017)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 12.9-inch (1st Gen 2015)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 10.5-inch (1st Gen 2017)</p>
                            </Link>
                            <Link className='text-decoration-none text-dark' to='/'>
                                <p className='p-2 fw-bold iphoneP'>iPad Pro 9.7 (1st Gen 2016)</p>
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
    );
};

export default IPadDetails;