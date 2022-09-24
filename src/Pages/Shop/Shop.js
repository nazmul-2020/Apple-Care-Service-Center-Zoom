import React from 'react';
import './Shop.css';
import { AiFillCaretDown } from "react-icons/ai";
import Spidercae from '../../assets/Images/iPhoneRepair/Spidercae-iPhone-11.png'
import headphone from '../../assets/Images/iPhoneRepair/headphone-and-speaker.png'
import smartphone_usb from '../../assets/Images/iPhoneRepair/smartphone-usb.png'


const Shop = () => {
    return (
        <div className=''>
            <div className='shopBanner'>
                <div className='overlay h-100 d-flex align-items-center justify-content-center'>
                    <div className=''>
                        <h1 className='text-white'>Well Come To Our Shop</h1>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h3 className='text-center my-3'><span className='text-info'>Featured</span> Categories</h3>
                <div className='row g-3 mb-3'>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Case & Protection</h6>
                            <img width='91' src={Spidercae} alt="" />
                        </div>
                    </div>

                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6> Headphones & Speaker</h6>
                            <img width='91' src={headphone} alt="" />
                        </div>
                    </div>

                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Power & Cables</h6>
                            <img width='91' src={smartphone_usb} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Mouse & Keypad</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Display</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Battery</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3 accessories'>
                <div className='text-center'>
                    <h4>AUTHENTIC APPLE ACCESSORIES IN BANGLADESH</h4>
                    <h4>Select Your <span className='text-white'>Accessories</span></h4>
                    <div class="container">
                        <div class="row mt-4 g-4 w-75 mx-auto">
                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select   p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select  p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select  border- p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 bg-inf ">
                                <div>
                                    <button className='btn btn-primary rounded-0 d-block mx-auto'>Find product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;