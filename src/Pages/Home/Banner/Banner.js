import React from 'react';
import banner from '../../../assets/Images/banner.png'
import './banner.css'

const Banner = () => {
    return (
        <div className='pt-5 banner'>
            <div className=''>
                <div className='container mt-5'>
                    <div className='text-center '>
                        <span className='fw-bold className="modal-dialog'>PRODUCTS </span>
                        <span className='mx-1'>|</span>
                        <span className='fw-bold'>SERVICE </span>
                        <span className='mx-1'>|</span>
                        <span className='fw-bold'>SHOP</span>
                    </div >
                </div>

                <div className='row m-0'>
                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'
                        data-aos="zoom-in-down"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000">
                        <div className=''>
                            <h3>PROFESSIONAL</h3>
                            <h1 className='mb-3'>Apple Service Center</h1>
                            <div data-aos="zoom-in-down"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="1500">
                                <button type="button" className="btn btn-outline-dark me-4">REPAIR NOW</button>
                                <button type="button" className="btn btn-outline-dark">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'
                        data-aos="fade-left"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000">
                        <img className='w-100' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;