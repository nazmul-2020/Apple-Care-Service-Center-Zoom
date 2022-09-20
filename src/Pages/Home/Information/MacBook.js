import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MacBook = () => {
    return (
        <div className='my-'>
              <div className='macBanner'>
                <div className='overlay d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h2 className='text-white'>MacBook</h2>
                        <p className='text-center  fw-bold'><Link className='text-decoration-none text-white ' to='/'>Back Home</Link></p>
                    </div>
                </div>
            </div>
            <div className='container'>
            <Outlet/>
                <div className='text-center mt-4'>
                    <h4>MacBook REPAIR SERVICES</h4>
                    <p>Choose your appropriate Mac devices</p>
                </div>
                
                <div className='row g-3 mx-auto'>
                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/macBook'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">MacBook Pro</h5>
                            </div>
                        </Link>
                    </div>

                    <div className='col col-md-3 col-lg-2'>
                        <Link className='text-decoration-none text-dark' to='/iMac/iMac22'>
                            <div class="mac-Ca d-flex align-items-center justify-content-center ">
                                <h5 class="">MacBook Air</h5>
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

export default MacBook;