import React from 'react';
import banner from '../../../assets/Images/banner.png';
import iphone from '../../../assets/img/iphone.jpg'
import ipad from '../../../assets/img/ipad.jpg'
import imac from '../../../assets/img/imac.jpg'
import Watch from '../../../assets/img/watch.jpg'
import Unlock from '../../../assets/img/iphone-lock.jpg'
import Battery from '../../../assets/img/battery-replacement.jpg'
import rear from '../../../assets/img/rear-case.jpg'
import Liquid from '../../../assets/img/liquid.jpg'

import './Banner.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [show, setShow] = useState(false);
    // const [showa, setShowa] = useState(false);


    return (
        // <div className='pt-5 banner'>
        //     <div className=''>
        //         <div className='container mt-5'>
        //             <div className='text-center '>
        //                 <span className='fw-bold className="modal-dialog'>PRODUCTS </span>
        //                 <span className='mx-1'>|</span>
        //                 <span className='fw-bold'>SERVICE </span>
        //                 <span className='mx-1'>|</span>
        //                 <span className='fw-bold'>SHOP</span>
        //             </div >
        //         </div>

        //         <div className='row m-0'>
        //             <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'
        //                 data-aos="zoom-in-down"
        //                 data-aos-easing="ease-in-out"
        //                 data-aos-duration="1000">
        //                 <div className=''>
        //                     <h3>PROFESSIONAL</h3>
        //                     <h1 className='mb-3'>Apple Service Center</h1>
        //                     <div data-aos="zoom-in-down"
        //                         data-aos-easing="ease-in-out"
        //                         data-aos-duration="1500">
        //                         <button type="button" className="btn btn-outline-dark me-4">REPAIR NOW</button>
        //                         <button type="button" className="btn btn-outline-dark">Buy Now</button>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'
        //                 data-aos="fade-left"
        //                 data-aos-easing="ease-in-out"
        //                 data-aos-duration="1000">
        //                 <img className='w-100' src={banner} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div>
            <div className="hero-area">
                {/* <TsParticles/> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12">
                            <div className="search-box-container text-center">
                                <ul className="nav">
                                    <li onClick={() => setShow(!show)} className="nav-item fw-bold" >
                                        <button className='btn fw-bold border-0'>SERVICE</button>
                                        </li>
                                    {/* <li  onClick={() => setShowa(!showa)} className="nav-item"><button className='btn'>SHOP</button></li> */}
                                </ul>

                                <div className="tab-content">
                                    <div id="service" className="container tab-pane active">

                                        {/* <div className="searchBox">
                                            <div className="input-group form-label-group">
                                                <input type="text" id="searchService" className="form-control"
                                                    placeholder="Search By Service Type" onkeyUp="showResult(this.value)"
                                                    required />
                                                <label for="searchService">Services</label>
                                                <div className="input-group-append">
                                                    <button className="btn" type="button"><i className="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div> */}
                                        {show ?
                                            <div className="search-result searchServiceResult" style={{ background: "rgba(255, 255, 255, 0.500)" }}
                                            >
                                                <ul className="item-list serviceList">
                                                    <li><Link to='/iPhone'>
                                                        <img className='rounded' src={iphone} alt="" />
                                                        <p>iPhone Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/iPad'>
                                                        <img src={ipad} alt="" />
                                                        <p>iPad Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/macBook'>
                                                        <img src={imac} alt="" />
                                                        <p>iMac Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/watch'>
                                                        <img src={Watch} alt="" />
                                                        <p>Watch Repair 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img src={Unlock} alt="" />
                                                        <p>iPhone Unlock 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img src={Battery} alt="" />
                                                        <p>Battery Replacement 2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img src={rear} alt="" />
                                                        <p>Rear Case Replacement2</p>
                                                    </Link></li>

                                                    <li><Link to='/'>
                                                        <img src={Liquid} alt="" />
                                                        <p>Liquid Damage 2</p>
                                                    </Link></li>
                                                </ul>
                                            </div>
                                            : null}
                                    </div>


                                    {/* <!-- tab pane close --> */}

                                    <div id="shop" className="container tab-pane fade">
                                        {/* <div className="searchBox">
                                         <div className="input-group form-label-group">
                                             <input type="text" id="searchShop" className="form-control"
                                                 placeholder="Search By Categories" onkeyUp="showResult(this.value)"
                                                 required />
                                             <label for="searchShop">Products</label>
                                             <div className="input-group-append">
                                                 <button className="btn" type="button"><i className="bi bi-search"></i></button>
                                             </div>
                                         </div>
                                     </div> */}

                                        {/* {
                                        showa? */}
                                        <div className="search-result searchShopResult" style={{ display: "" }}>
                                            <ul className="item-list shopList">
                                                <li>
                                                    <img src={iphone} alt="" />
                                                    <p>iPhone Repair 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />

                                                    <p>iPad Repair 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />

                                                    <p>iMac Repair 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />

                                                    <p>Watch Repair 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />
                                                    <p>iPhone Unlock 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />
                                                    <p>Battery Replacement 2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />
                                                    <p>Rear Case Replacement2</p>
                                                </li>
                                                <li>
                                                    <img src={iphone} alt="" />
                                                    <p>Liquid Damage 2</p>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* :null
                                    } */}

                                    </div>

                                    {/* <!-- tab pane close --> */}
                                </div>
                            </div>
                            {/* <!-- Search box container close --> */}
                        </div>
                    </div>
                    {/* <!-- Row close --> */}
                </div>
                {/* <!-- Container close --> */}
            </div>
            {/* <!-- Header area close --> */}
        </div>


    );
};

export default Banner;