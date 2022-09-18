import React from 'react';
import { Link } from 'react-router-dom';
import iPad from '../../../../assets/Images/iPhoneRepair/one/iPad8,4.png'
import './IPad.css'

const IPad = () => {
    return (
        <div className='my-5'>
            <div className='iPhoneBanner'>
                <div className='overlay d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h1 className='text-white'>IPad repair</h1>
                        <p className='text-center  fw-bold'><Link className='text-decoration-none text-white ' to='/'>Back Home</Link></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mt-5 text-center'>
                    <h3>iPad Repair Service</h3>
                    <p>Choose the iPad model you need to repair</p>
                </div>
                <div className='row g-3'>
                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 11-Inch (2nd Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2 ' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 3 12.9-Inch (3rd Gen 2018)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 11-Inch (1st Gen 2018)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2 ' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 10.5-inch (1st Gen 2017)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2 ' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-4 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iPadDetails'>
                            <div class="box-card iPad p-3 border border-info">
                                <img className='d-block mx-auto box2' width='90' src={iPad} alt="" />
                                <div>
                                    <h5 className='mt-3'>iPad Pro 4 12.9-Inch (4th Gen 2020)</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPad;