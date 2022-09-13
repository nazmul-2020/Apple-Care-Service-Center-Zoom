import React from 'react';
import { Link } from 'react-router-dom';
import iphone_xr_original_battery from '../../../../../assets/Images/iPhoneRepair/one/iphone-xr-original-battery--300_200.webp';
import iphone_Xs_max_original_battery from '../../../../../assets/Images/iPhoneRepair/one/iphone-Xs-max-original-battery-300_200.webp';
import Aspor_iPhone7_Plus from '../../../../../assets/Images/iPhoneRepair/one/9905-Aspor-iPhone-7-Plus-Battery-300_200.webp';


const IPhoneAllBatter = () => {
    return (
        <div className='my-5'>
            <div className=' container pt-5'>
                <h3 className=''><span className='text-info'>BATTERY</span> FOR APPLE DEVICES</h3>
                <div className="row g-2 mt-3">
                    <div className='col-2'>
                        <div className=''>
                            <p className='fs-5 mb-0'>BRAND</p>
                            <div className='mx-auto w-75'>
                                <div className=''>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">Aspor</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">OEM</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">Apple</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">iFixit</label>
                                </div>
                                <hr />
                            </div>

                            <p className='fs-5 mb-0'>DEVICE</p>
                            <div className='mx-auto w-75'>
                                <div className=''>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">iPhone</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">MacBook Pro</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">Apple Watch</label>
                                </div>

                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">MacBook Air</label>
                                </div>
                                <div>
                                    <input className='me-1' type="radio" name="BRAND" />
                                    <label htmlFor="">MacBook</label>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <div className='col-10'>
                        <div className='row g-3'>
                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={iphone_xr_original_battery} alt="" />
                                    <div className='mb-2'>
                                        <p>iphone XR Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark ' to='/iPhoneBatterId'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={iphone_Xs_max_original_battery} alt="" />
                                    <div className='mb-2'>
                                        <p>iphone XR Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark' to='/iPhoneBatterId'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={iphone_xr_original_battery} alt="" />
                                    <div className='mb-2'>
                                        <p>iphone XR Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark' to='/iPhoneBatterId'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={iphone_Xs_max_original_battery} alt="" />
                                    <div className='mb-2'>
                                        <p>iPhone Xs Max Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark' to='/iPhoneBatterId'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={Aspor_iPhone7_Plus} alt="" />
                                    <div className='mb-2'>
                                        <p>iphone XR Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark' to='/iPhoneBatterId'>Add To Cart</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className='col-6 col-md-4 col-lg-2'>
                                <div className='border border-info p-2 shadow'>
                                    <img className='w-100' height='' src={iphone_xr_original_battery} alt="" />
                                    <div className='mb-2'>
                                        <p>iphone XR Original Battery</p>
                                        <button className='btn btn-info btn-sm d-block mx-auto'>
                                            <Link className='text-decoration-none text-dark' to='/iPhoneBatterId'>Add To Cart</Link></button>
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

export default IPhoneAllBatter;