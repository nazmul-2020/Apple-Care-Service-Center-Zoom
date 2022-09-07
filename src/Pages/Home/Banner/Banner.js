import React from 'react';
import banner from '../../../assets/Images/banner.png'
import './banner.css'
import { AiOutlineSearch } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className='pt-5 banner'>
            <div className=''>
                <div className='container mt-5'>
                    <div className='text-center '>
                        <span className='fw-bold class="modal-dialog'>PRODUCTS </span>
                        <span className='mx-1'>|</span>
                        <span className='fw-bold'>SERVICE </span>
                        <span className='mx-1'>|</span>
                        <span className='fw-bold'>SHOP</span>
                    </div >

                    {/* ------------ Search bar --------------------*/}
                    <div className=' pt-1 sIconP'>
                        <input class="form-control mx-auto mt-3 rounded-pill w-50 sticky-top" type="search" placeholder="Search Products" aria-label="Search" >
                        </input>
                    </div>

                </div>

                <div className='row m-0'>
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center '>
                        <div className=''>
                            <h3>PROFESSIONAL</h3>
                            <h1 className='mb-3'>Apple Service Center</h1>
                            <button type="button" class="btn btn-outline-dark me-4">REPAIR NOW</button>
                            <button type="button" class="btn btn-outline-dark">Buy Now</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>
                        <img className='w-100' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;