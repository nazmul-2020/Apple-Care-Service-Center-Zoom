import React from 'react';
import { NavLink } from 'react-router-dom';
import './Watch.css'

const Watch = () => {
    return (
        <div className=''>
            <div className='iPhoneBanner'>
                <div className='overlay h-100 d-flex justify-content-center align-items-center'>
                    <div className='text-white'>
                        <h3>Apple watch Repair</h3>
                        <NavLink className='text-decoration-none fw-bold text-white text-center d-block' to='/watch'> Back Watch</NavLink>
                    </div>
                </div>
            </div>
            <div className='watch-container'>
                <div className='pt-3 container'>
                    <div className='text-center'>
                        <h3>Apple Watch Repair Services</h3>
                        <p>Choose Your Preferred Apple Watch Model</p>
                    </div>
                    <div className='row g-3 py-3'>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/watchId'>
                                <div class="d-flex align-items-center watch-card justify-content-center p-1 ">
                                    <h6 class="">Apple Watch Series 7 (45mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1 ">
                                    <h6 class="">Apple Watch Series 7 (41mm)</h6>
                                </div>
                            </NavLink>
                        </div>

                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class="d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series  (44mm)</h6>
                                </div>
                            </NavLink>
                        </div>

                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 6 (44mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 6 (40mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series ES (44mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series ES (40mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch 5 (44mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 5 (40mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 4 (44mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 4 (40mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 3 (42mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div className='col col-md-4 col-lg-2 '>
                            <NavLink className='text-decoration-none text-dark' to='/'>
                                <div class=" d-flex align-items-center watch-card justify-content-center p-1">
                                    <h6 class="">Apple Watch Series 3 (38mm)</h6>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;