import React from 'react';
import { Link } from 'react-router-dom';
import './Mac.css'

const Mac = () => {
    return (
        <div className='my-5'>
            <div className='macBanner mt-5'>
                <div className='overlay d-flex align-items-center justify-content-center h-100'>
                    <div className='text-white text-center'>
                        <h3>Mac Repair</h3>
                        <p><Link className='text-white' to='/'>Back Home</Link></p>
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='text-center mt-4'>
                    <h4>MAC REPAIR SERVICES</h4>
                    <p>Choose your appropriate Mac devices</p>
                </div>
                <div className='row g-3 mx-auto'>
                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">Macbook Pro</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">Macbook Air</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">Macbook </h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">Mac Mini</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">iMac</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">Macbook Pro</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mac;