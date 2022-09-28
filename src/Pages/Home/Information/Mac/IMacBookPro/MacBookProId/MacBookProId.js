import React from 'react';
import { Link } from 'react-router-dom';
import watchBattery from '../../../../../../assets/Images/Watch/icons8-charge-empty-battery-96.png'
import charging from '../../../../../../assets/Images/MacRepair/Charging Port Replacement.png'
import Screen  from '../../../../../../assets/Images/MacRepair/Screen Replacement.png'
import speaker from '../../../../../../assets/Images/Watch/icons8-speaker-96.png'
import keyboard from '../../../../../../assets/Images/MacRepair/keboard replacement.png'
import Liquid from '../../../../../../assets/Images/MacRepair/Liquid Damage.png'
import motherboard from '../../../../../../assets/Images/MacRepair/Logic board-Motherboard repair.png'
import SSD from '../../../../../../assets/Images/MacRepair/SSD upgrade.png'
import trackpad from '../../../../../../assets/Images/MacRepair/Trackpad Replacement.png'
import os from '../../../../../../assets/Images/MacRepair/OS Installation.png'
import wifi from '../../../../../../assets/Images/MacRepair/wi-fi replacement.png'

import apple from '../../../../../../assets/Images/Watch/icons8-apple-watch.png'
import appleWatch from '../../../../../../assets/Images/Watch/icons-apple-watch-100.png'

const MacBookProId = () => {
    return (
        <div>
            <div className='macBanner'>
                <div className='overlay d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h2 className='text-white'>MacBook</h2>
                        <p className='text-center  fw-bold'><Link className='text-decoration-none text-white ' to='/'>Back Home</Link></p>
                    </div>
                </div>
            </div>

            <div className='container '>
                <div className='text-center my-4'>
                    <h4>MacBook Pro 13" Unibody (Early 2011) Repair service</h4>
                    <p>Early 2011 model, A1278 / 2.3 GHz i5 or 2.7 GHz i7 processor.</p>
                </div>
                <div className='row py-2'>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={watchBattery} alt="" />
                                <p className='fw-bold mb-1'>Battery Replacement</p>
                                <p>Tk. 200</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto' src={speaker} alt="" />
                                <p className='fw-bold mb-1'>Speaker Replacement</p>
                                <p className='mb-1'>Tk. 300</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={charging} alt="" />
                                <p className='fw-bold mb-1'>Charging port issue</p>
                                <p className=''>Tk. 300</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width=
                                    "100" src={Screen} alt="" />
                                <p className='fw-bold mb-1'>Display Replacement</p>
                                <p>Tk. 100 </p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={keyboard} alt="" />
                                <p className='fw-bold mb-1'>Keyboard Replacement</p>
                                <p >Tk. 400</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={Liquid} alt="" />
                                <p className='fw-bold mb-1'>Liquid Damage</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={motherboard} alt="" />
                                <p className='fw-bold mb-1'>Motherboard repair</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={os} alt="" />
                                <p className='fw-bold mb-1'>Os Installation</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={SSD} alt="" />
                                <p className='fw-bold mb-1'>SSD</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={trackpad} alt="" />
                                <p className='fw-bold mb-1'>Trackpad Issue</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>

                        <div className='col col-md-4 col-lg-2'>
                            <div className='text-center p-2 watch'>
                                <img className='d-block mx-auto'width='100' src={wifi} alt="" />
                                <p className='fw-bold mb-1'>Wifi Issue</p>
                                <p className=''>Tk. 150</p>
                                <Link to='/watchBattery' className='text-decoration-none'>
                                    <button className='btn btn-sm btn-outline-dark'>View Details  </button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default MacBookProId;