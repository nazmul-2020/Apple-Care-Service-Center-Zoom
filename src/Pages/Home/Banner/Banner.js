import React from 'react';
import banner from '../../../assets/Images/banner.png';
import logo from '../../../assets/img/logo.png'
import './Banner.css'

const Banner = () => {
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
           

            <div class="hero-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 col-sm-12">
                            <div class="search-box-container text-center">
                                <ul class="nav">
                                    <li class="nav-item"><a class="active" data-toggle="tab" href="#service">SERVICE</a></li>
                                    <li class="nav-item"><a data-toggle="tab" href="#shop">SHOP</a></li>
                                </ul>

                                <div class="tab-content">
                                    <div id="service" class="container tab-pane active">
                                        <div class="searchBox">
                                            <div class="input-group form-label-group">
                                                <input type="text" id="searchService" class="form-control"
                                                    placeholder="Search By Service Type" onkeyup="showResult(this.value)"
                                                    required />
                                                <label for="searchService">Services</label>
                                                <div class="input-group-append">
                                                    <button class="btn" type="button"><i class="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-result searchServiceResult" style={{ display: "none" }}>
                                            <ul class="item-list serviceList">
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
                                    <div id="shop" class="container tab-pane fade">
                                        <div class="searchBox">
                                            <div class="input-group form-label-group">
                                                <input type="text" id="searchShop" class="form-control"
                                                    placeholder="Search By Categories" onkeyup="showResult(this.value)"
                                                    required />
                                                <label for="searchShop">Products</label>
                                                <div class="input-group-append">
                                                    <button class="btn" type="button"><i class="bi bi-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-result searchShopResult" style={{ display: "none" }}>
                                            <ul class="item-list shopList">
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