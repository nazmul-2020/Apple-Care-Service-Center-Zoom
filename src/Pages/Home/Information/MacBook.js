import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MacBook = () => {
    return (
        <div className='my-'>
              <div className='macBanner'>
                <div className='overlay d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h2 className='text-white'>MacBook</h2>
                        <p className='text-center  fw-bold'><Link className='text-decoration-none text-white ' to='/macBookPro'>Back Home</Link></p>
                    </div>
                </div>
            </div>

            <div className='container'>
            {/* <Outlet/> */}
                <div className='text-center mt-4'>
                    <h4>MacBook REPAIR SERVICES</h4>
                    <p>Choose your appropriate Mac devices</p>
                </div>
                
                <div className='row g-3 mx-auto'>
                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">MacBook Pro</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">MacBook Air</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">Macbook </h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">Mac Mini</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">iMac</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBookPro'>
                            <div className="mac-Ca d-flex align-items-center justify-content-center watch-card">
                                <h5 className="">Macbook Pro</h5>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MacBook;