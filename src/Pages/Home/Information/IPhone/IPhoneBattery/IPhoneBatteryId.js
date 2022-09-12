import React from 'react';
import iphone13proMaxBattery from '../../../../../assets/Images/iPhoneRepair/one/iphone-13-pro-max-battery-300_200.png';


const IPhoneBatteryId = () => {
    return (
        <div className='mt-5'>
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
                                <button className='btn mt-3 shadow border-0 '>Battery</button>
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
                <div>

                </div>
            </div>
        </div>
    );
};

export default IPhoneBatteryId;