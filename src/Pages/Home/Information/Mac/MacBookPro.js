import React from 'react';
import { Link } from 'react-router-dom';

const MacBookPro = () => {
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
                <div className='text-center mt-4'>
                    <h4>MAC REPAIR SERVICES</h4>
                    <p>Choose your appropriate Mac devices</p>
                </div>
                <div>
                </div>

                <div className='row  g-3 mx-auto'>
                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookProDetails'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card ">
                                <div>
                                    <h5 className="">MacBook Pro</h5>
                                    <h5 className="">13"</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <div>
                                    <h5 className="">MacBook Pro</h5>
                                    <h5 className="">15"</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <div>
                                    <h5 className="">MacBook Pro</h5>
                                    <h5 className="">16"</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <div>
                                    <h5 className="">MacBook Pro</h5>
                                    <h5 className="">17"</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacBookPro;