import React from 'react';
import laptop from '../../../assets/Icon/laptop.png'
import mobilePh from '../../../assets/Icon/mobile-phone 1.png'
import monitor from '../../../assets/Icon/monitor 1.png'
import watch from '../../../assets/Icon/watch.png'
import tablet from '../../../assets/Icon/tablet-device 3.png'
// import { IoIosLaptop } from "@react-icons/all-files/fa/IoIosLaptop";

const Information = () => {
    return (
        <div className='my-5'>
            <div className='container'>
                <div className='text-center w-50 mx-auto'>
                    <h1>Product Service and Repair Information</h1>
                    <p>Learn more about what’s covered under your warranty, costs for repair outside of warranty, and more for your specific Apple product.</p>
                </div>

                <div>
                    <div class="row g-3 mt-3">
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                                <div class="card-body text-center">
                                <img className='d-block mx-auto' src={laptop} alt="" />
                                <small>Laptop</small>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                            <div class="card-body text-center">
                                <img className='d-block mx-auto' src={mobilePh} alt="" />
                                <small>Mobile Phone</small>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                                <div class="card-body text-center">
                                <img className='d-block mx-auto' src={monitor} alt="" />
                                <small>Monitor</small>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                                <div class="card-body text-center">
                                <img className='d-block mx-auto' src={watch} alt="" />
                                <small>Watch</small>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                            <div class="card-body text-center">
                                <img className='d-block mx-auto' src={laptop} alt="" />
                                <small>Laptop</small>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-3 col-lg-2">
                            <div class="card">
                            <div class="card-body text-center">
                                <img className='d-block mx-auto' src={tablet} alt="" />
                                <small>Tablet</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Information;