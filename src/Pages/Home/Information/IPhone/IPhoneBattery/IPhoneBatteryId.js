import React from 'react';
import iphone13proMaxBattery from '../../../../../assets/Images/iPhoneRepair/one/iphone-13-pro-max-battery-300_200.png';
import red_iphone_13_pro from '../../../../../assets/Images/iPhoneRepair/one/red-iphone-13-pro.webp';
import iphone_13_promax_leather from '../../../../../assets/Images/iPhoneRepair/one/iphone-13-pro-max-leather-cas.webp';
import iphone13_screen_protector from '../../../../../assets/Images/iPhoneRepair/one/iphone-13-screen-protector.webp';
import { Link } from 'react-router-dom';
// import './IPhoneBatteryId.css'


const IPhoneBatteryId = () => {
    return (
        <div className='my-5'>
            <div className='container pt-5'>
                <div className="w-75 mx-auto">
                    <div className="row">
                        <div className='col col-md-12 col-lg-6'>
                            <div>
                                <img className='d-block mx-auto' src={iphone13proMaxBattery} alt="" />
                            </div>
                        </div>
                        <div className='col col-md-12 col-lg-6'>
                            <div>
                                <h3 className='fs-3'>iPhone 13 Pro Max Original Battery</h3>
                                <button className='btn mt-3 shadow border-0 disabled'>
                                    <Link className='text-decoration-none text-dark' to='/iPhoneAllBatter'>Battery</Link>
                                </button>
                                <p className='mt-3 w-75'>Long-lasting capacity, safe & reliable original battery replacement for your iPhone 13 Pro Max.</p>
                                <hr />

                                <div>
                                    <div>
                                        <label className='fw-bold' htmlFor="">QUANTITY :</label>
                                        <input type="number" className='aaa w-2 ms-2' name="" id="" />
                                    </div>

                                    <div>
                                        <p className='mt-3'><span className='fw-bold'>Price :</span> 120</p>
                                        <button className='btn border-0 shadow btn-outline-dark'>Add To Cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col col-md-6 col-lg-6 ">

                        <div className=''>
                            <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                <button className={({ isActive }) => (isActive ? "active-link" : "link")} class="nav-link active border-dark rounded-0" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="" aria-controls="nav-home" aria-selected="true">Description</button>
                                <button className={({ isActive }) => (isActive ? "active-link" : "link")}
                                    class="nav-link border-dark rounded-0" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Warranty</button>
                            </div>


                            <div class="tab-content border pt-5 ps-3 border-dark" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <h3>iPhone 13 Pro Max Original Battery</h3>
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
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <p className='mb-4 fw-bold fs-5'>Battery Warranty : 18 month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-6 col-lg-6 ">
                        <div>
                            <p>The iPhones have always provided their users with optimal specifications that perform up to expectation. One of the key features of the latest iPhone 13 Pro Max is the battery. The iPhone 13 Pro Max’s battery sits perfectly with the phone and gives its users the perfect experience. The iPhone 12 Pro Max offers a non-removable Lithium-Polymer battery that provides 4352 mAh. It supports fast wired and wireless charging which provides a 55% charge in 30 minutes. Although the iPhone provides an excellent battery, it will drain in time with wear and tear as the user uses it. They may face some issues with the phone’s battery.</p>
                        </div>
                    </div>
                </div>

                <div className='my-4'>
                    <h3 className='text-center'>Related products</h3>
                    <div className="row g-3">
                        <div className='col col-md-6 col-lg-3'>
                            <div>
                                <div class="card border-0 shadow" style={{ width: '15rem' }}>
                                    <img height='250' src={red_iphone_13_pro} class="card-img-top mt-2" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">iPhone 13 Pro Max Silicone Case</p>
                                        <button className="btn btn-outline-info fw-bol shadow border-0 d-block mx-auto text-dark">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col col-md-6 col-lg-3'>
                            <div>
                                <div class="card border-0 shadow" style={{ width: '15rem' }}>
                                    <img height='250' src={iphone_13_promax_leather} class="card-img-top mt-2" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">iPhone 13 Pro Max Leather Case</p>
                                        <button className="btn btn-outline-info fw-bol shadow border-0 d-block mx-auto text-dark">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col col-md-6 col-lg-3'>
                            <div>
                                <div class="card border-0 shadow" style={{ width: '15rem' }}>
                                    <img height='250' src={iphone13_screen_protector} class="card-img-top mt-2" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">iPhone 13 Screen Protector cas</p>
                                        <button className="btn btn-outline-info fw-bol shadow border-0 d-block mx-auto text-dark">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col col-md-6 col-lg-3'>
                            <div>
                                <div class="card border-0 shadow" style={{ width: '15rem' }}>
                                    <img height='250' src={red_iphone_13_pro} class="card-img-top mt-2" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">iPhone 13 Pro Max Silicone Case</p>
                                        <button className="btn btn-outline-info fw-bol shadow border-0 d-block mx-auto text-dark">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default IPhoneBatteryId;