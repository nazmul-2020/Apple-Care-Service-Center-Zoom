import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Mac.css'

const Mac = () => {
    return (
        <div className='my-'>
            <div className='macBanner mt-'>
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

                <div>

                </div>
                <Outlet />
                <div className='row g-3 mx-auto'>
                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iMac22'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">MacBook Pro</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iMac/iMac22'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">MacBook Air</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iMackBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">MacBook </h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">Mac Mini</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">iMac</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 className="">MacBook Pro</h5>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mac;