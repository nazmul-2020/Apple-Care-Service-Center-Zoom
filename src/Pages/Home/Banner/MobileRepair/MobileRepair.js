import React from 'react';
import { Button, Card } from 'react-bootstrap';
import d1 from '../../../../assets/Icon/d1 1.png'
import { Icon } from '@iconify/react';
import { BsPhoneLandscape } from "react-icons/bs";
import { MdLaptop } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import './MobileRepair.css'


const MobileRepair = () => {
    return (
        <div className='mobileRepair  '>
           <div className='overlay'>
           <div className='container py-5'>
                <div className='text-center '>
                    <h1 className='text-white'>We Make <span className='text-info'>Mobile Repair</span> Stress free</h1>
                    <p className='w-50 mx-auto text-white'>Once you've found and reached iCare Apple to repair your important devices, you don't need to be worried. We'll be careful as much as you are...</p>

                    <div className='row g-3 mx-auto mt-'>
                        <div class="col col-md-6 col-lg-4 bg-info">
                            <div class="card">
                                {/* <img src={d1} alt="" /> */}
                                {/* <Icon className='fs-1' icon="bi:phone" />
                                <Icon icon="arcticons:lock-my-phone" />
                                <BsPhoneLandscape/> */}
                                <MdLaptop/>
                                <FcHome></FcHome>
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4">
                            <div class="card">
                                <img src="" alt="" />
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4">
                            <div class="card">
                                <img src="" alt="" />
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4">
                            <div class="card">
                                <img src="" alt="" />
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4">
                            <div class="card">
                                <img src="" alt="" />
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4">
                            <div class="card">
                                <img src="" alt="" />
                                <h5 class="crd-title">Liquid Damage</h5>
                                <p class="car-text">Wrost thing that can happen to your device is get damaged by liquid. Sooner you bring it to us is better for your device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MobileRepair;