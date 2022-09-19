import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iphone12 from '../../../../assets/Images/iPhoneRepair/iphone 12 mini.png'
import iphone_13promax from '../../../../assets/Images/iPhoneRepair/iphone-13-pro-max.png'
import iPhone_X from '../../../../assets/Images/iPhoneRepair/iPhone-X.png'
import iPhone_XIPhoneSErepair from '../../../../assets/Images/iPhoneRepair/IPhoneSErepair.png'
import IPhoneXS_MaxRepair from '../../../../assets/Images/iPhoneRepair/IPhoneXS MaxRepair.png'
import './IPhone.css'

const IPhone = () => {


    // const [products, setProducts] = useState([]);

    // useEffect(() => { 
    //     fetch('IPhoneRepair.json')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // }, [])

    return (
        <div className='my-5'>
            <div className='iPhoneBanner'>
                <div className='overlay d-flex align-items-center h-100 justify-content-center'>
                    <div>

                        <h1 className='text-white'>iPhone Repair</h1>
                        <Link className='text-decoration-none fw-bold text-white text-center d-block' to='/'> Back Home</Link>

                    </div>
                </div>
            </div>
            <div className='container py-3'>
                <div className="text-center">
                    <h1> iPhone Repair Service</h1>
                    <p>Choose the iPhone model you need to repair</p>
                </div>

                <div className=''>
                    <div className='row g-3'>
                    {/* <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={iPhone_X} alt="" />
                                <p className='fw-bold'>iPhone X</p>
                            </div>
                        </div> */}

                        <div className='col col-md-4 col-lg-2'>
                            <Link to='/iPhoneId' className='text-decoration-none text-dark'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={iphone_13promax} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                            </Link>
                        </div>
                                                
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 12 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={iPhone_X} alt="" />
                                <p className='fw-bold'>iPhone X</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={iPhone_XIPhoneSErepair} alt="" />
                                <p className='fw-bold'>iPhone-XI</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={IPhoneXS_MaxRepair} alt="aaaa" />
                                <p className='fw-bold'>iPhone-X</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                                <img className='d-block mx-auto my-3' width='' height='180' src={IPhoneXS_MaxRepair} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />                                
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>
                        <div className='col col-md-4 col-lg-2'>
                            <div className='border border-info shadow-lg text-center' >
                            <img className='d-block mx-auto my-3' width='' height='180' src={iphone12} alt="" />
                                <p className='fw-bold'>iPhone 13 Pro</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPhone;