import React from 'react';
import './Shop.css';
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
            
            <div className='py-3 bg'>
                    <div className='text-center'>
                        <h4>AUTHENTIC APPLE ACCESSORIES IN BANGLADESH</h4>
                        <h4>Select your <span className='text-info'>accessories</span></h4>
                        <div className='mt-4'>
                            <input className='me-2 p-1' type="text" name="" id="" />
                            <input className='me-2 p-1' type="text" name="" id="" />
                            <input className='me-2 p-1' type="text" name="" id="" />
                            <button className='btn'>Find Product</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Shop;