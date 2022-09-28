import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ss from '../../../../../assets/Images/Watch/icons8-charge-empty-battery-96.png'
import './WatchBattery.css'

const WatchBattery = () => {
    return (
        <div>
            <div className='container mt-2'>
                <div className='row mx-auto mb-3 '>
                    <div className='col col-md-6 col-lg-6'>
                        <div className='h-100 d-flex align-items-center justify-content-center'>
                            <img className='d-block mx-auto my-auto w-50' src={ss} alt="" />
                        </div>

                    </div>
                    <div className='col col-md-6 col-lg-6'>
                        <div>
                            <h6 className='fs-4'>Apple Watch Series 7 (45mm)Battery Replacement</h6>
                            <button className='btn shadow border-0 disabled'>
                                <Link className='text-decoration-none text-dark' to='/iPhoneAllBatter'>Battery</Link>
                            </button>
                            <p className='mt-3 w-75'>Long-lasting capacity, safe & reliable original battery replacement for your Apple Watch Series 7 (45mm).</p>
                            <hr />

                            <div>
                                <div>
                                    <label className='fw-bold' htmlFor="">QUANTITY :</label>
                                    <input type="number" className='aaa w-2 ms-2' name="" id="" />
                                </div>

                                <div>
                                    <p className='mt-3'><span className='fw-bold'>Price :</span> 120</p>

                                    <div className='d-flex justify-content-between'>
                                            <button className='btn border-0 shadow btn-outline-dark'>Add To Cart</button>
                                            <button className='btn border-0 shadow btn-primary py-2'><BsFillTelephoneFill className='me-1' /> +880-17011111111</button>
                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />

            <div className='container'>
                <div className='row mt-5'>
                    <div className="col col-md-6 col-lg-6 ">

                        <div className=''>
                            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                <button className="nav-link active border-dark rounded-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="" aria-controls="nav-home" aria-selected="true">Description</button>
                                <button className="nav-link border-dark rounded-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Warranty</button>
                            </div>


                            <div className="tab-content border pt-5 ps-3 border-dark" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <h3>Apple Watch Series 7 (45mm)Battery</h3>
                                    <p className='mt-3 mb-0 fw-bold fs-5 text-decoration-underline'>Battery Specifications:</p>
                                    <p>Type: Li-Ion 4352 mAh</p>
                                    <p className='mt-3 mb-0 fw-bold fs-5 text-decoration-underline'> Compatibility:</p>
                                    <p>iPhone 13 Pro Max</p>
                                    <p className='mt-3 mb-0 fw-bold fs-5 text-decoration-underline'>Included:</p>
                                    <p>Battery Adhesive</p>
                                    <p className='mt-3 mb-0 fw-bold fs-5 text-decoration-underline'>Warranty:</p>
                                    <p>18 Months</p>
                                    <p className='fw-bold fs-5'>NB: 30-days money-back guarantee if you are not satisfied.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <p className='mb-4 fw-bold fs-5'>Battery Warranty : 18 month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-lg-6 ">
                        {/* <div>
                            <p>The iPhones have always provided their users with optimal specifications that perform up to expectation. One of the key features of the latest iPhone 13 Pro Max is the battery. The iPhone 13 Pro Max’s battery sits perfectly with the phone and gives its users the perfect experience. The iPhone 12 Pro Max offers a non-removable Lithium-Polymer battery that provides 4352 mAh. It supports fast wired and wireless charging which provides a 55% charge in 30 minutes. Although the iPhone provides an excellent battery, it will drain in time with wear and tear as the user uses it. They may face some issues with the phone’s battery.</p>
                        </div> */}
                        <div className='h-100' height='100%'>
                            <iframe className='rounded' width="100%" height="100%" src="https://www.youtube.com/embed/AOc16nL9CSM?start=76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchBattery;