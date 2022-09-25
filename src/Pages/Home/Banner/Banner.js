import React from 'react';
import banner from '../../../assets/Images/banner.png';
import logo from '../../../assets/img/logo.png'
import TsParticles from '../../TsParticles';

import './Banner.css'

const Banner = () => {
    // const particlesInit = useCallback(async (engine) => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async (container) => {
    //     await console.log(container);
    // }, []);

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

            <TsParticles/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-sm-12">
                            <div className="search-box-container text-center">
                                <ul className="nav">
                                    <li className="nav-item"><a className="active" data-toggle="tab" href="#service">SERVICE</a></li>
                                    <li className="nav-item"><a data-toggle="tab" href="#shop">SHOP</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div id="service" className="container tab-pane active">
                                        <div className="searchBox">
                                            <div className="input-group form-label-group">
                                                <input type="text" id="searchService" className="form-control"
                                                    placeholder="Search By Service Type" onkeyUp="showResult(this.value)"
                                                    required />
                                                <label for="searchService">Services</label>
                                                <div className="input-group-append">
                                                    <button className="btn" type="button"><i className="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-result searchServiceResult" style={{ display: "none" }}>
                                            <ul className="item-list serviceList">
                                                <li>
                                                    {/* <img src="img/iphone.jpg" alt=""> */}
                                                    <p>iPhone Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/ipad.jpg" alt=""> */}
                                                    <p>iPad Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/imac.jpg" alt=""> */}
                                                    <p>iMac Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/watch.jpg" alt=""> */}
                                                    <p>Watch Repair</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/iphone-lock.jpg" alt=""> */}
                                                    <p>iPhone Unlock</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/battery-replacement.jpg" alt=""> */}
                                                    <p>Battery Replacement</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/rear-case.jpg" alt=""> */}
                                                    <p>Rear Case Replacement</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/liquid.jpg" alt=""> */}
                                                    <p>Liquid Damage</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- tab pane close --> */}
                                    <div id="shop" className="container tab-pane fade">
                                        <div className="searchBox">
                                            <div className="input-group form-label-group">
                                                <input type="text" id="searchShop" className="form-control"
                                                    placeholder="Search By Categories" onkeyUp="showResult(this.value)"
                                                    required />
                                                <label for="searchShop">Products</label>
                                                <div className="input-group-append">
                                                    <button className="btn" type="button"><i className="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-result searchShopResult" style={{ display: "none" }}>
                                            <ul className="item-list shopList">
                                                <li>
                                                    {/* <img src="img/iphone.jpg" alt=""> */}
                                                    <p>iPhone Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/ipad.jpg" alt=""> */}
                                                    <p>iPad Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/imac.jpg" alt=""> */}
                                                    <p>iMac Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/watch.jpg" alt=""> */}
                                                    <p>Watch Repair 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/iphone-lock.jpg" alt=""> */}
                                                    <p>iPhone Unlock 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/battery-replacement.jpg" alt=""> */}
                                                    <p>Battery Replacement 2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/rear-case.jpg" alt=""> */}
                                                    <p>Rear Case Replacement2</p>
                                                </li>
                                                <li>
                                                    {/* <img src="img/liquid.jpg" alt=""> */}
                                                    <p>Liquid Damage 2</p>
                                                </li>
                                            </ul>
                                        </div>
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