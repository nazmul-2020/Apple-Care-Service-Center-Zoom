import React from 'react';
import { Link } from 'react-router-dom';
import watchBattery from '../../../../../assets/Images/Watch/icons8-charge-empty-battery-96.png'
import speaker from '../../../../../assets/Images/Watch/icons8-speaker-96.png'
import watch from '../../../../../assets/Images/Watch/icons8-apple-watch-100.png'
import apple from '../../../../../assets/Images/Watch/icons8-apple-watch.png'
import appleWatch from '../../../../../assets/Images/Watch/icons-apple-watch-100.png'
import './WatchId.css'

const WatchId = () => {
    return (
        <div>
            <div className='iPhoneBanner'>
                <div className='overlay h-100 d-flex justify-content-center align-items-center'>
                    <div className='text-white'>
                        <h3>Apple watch Repair</h3>
                        <Link className='text-decoration-none fw-bold text-white text-center d-block' to='/watch'> Back Watch</Link>
                    </div>
                </div>
            </div>

            <div className='watch-id-content'>
                <div className='container pt-3 '>
                    <div className='text-center  '>
                        <h4>Apple Watch Series 7 (45mm) Repair service</h4>
                        <p>Choose appropriate apple watch services</p>
                    </div>

                    <div className='row py-2'>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={watchBattery} alt="" />
                                <p className='fw-bold'>Battery Replacement</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={speaker} alt="" />
                                <p className='fw-bold m-0'>Speaker Replacement</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={watch} alt="" />
                                <p className='fw-bold'>Software Issue</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={apple} alt="" />
                                <p className='fw-bold'>Display Replacement</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={appleWatch} alt="" />
                                <p className='fw-bold'>Battery Replacement</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={watchBattery} alt="" />
                                <p className='fw-bold'>Battery Replacement</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchId;