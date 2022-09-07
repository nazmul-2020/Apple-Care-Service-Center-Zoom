import { Icon } from '@iconify/react';
import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { MdHomeRepairService } from 'react-icons/md';
import { FcSupport } from 'react-icons/fc';
import './OurService.css'


const OurService = () => {
    return (
        <div className='mt-1 py-3 newArrival'>
            <div className='container'>
                <div className="row text-center">
                    <div className="col col-md-6 col-lg-3">
                        <div>
                            <FaShippingFast className='icon' />
                            <h6>Fast & Secure Shipping</h6>
                            <p>We ship exclusively with UPS to make sure your device travels safely and quickly. Ground, 2-Day, and Overnight shipping options available.</p>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-3">
                        <div>
                            <MdHomeRepairService className='icon' />
                            <h6>Warranty on all repairs</h6>
                            <p>We stand behind all our repairs. We offer a 1 year warranty on all screen repair services and 90 days on all other repair services.</p>
                        </div>
                    </div>

                    <div className="col col-md-6 col-lg-3">
                        <div>
                            <FcSupport className='icon' />

                            <h6>Top-notch Tech Support</h6>
                            <p>Have a question? We're here to help. Our live support is online 7days a week 9am-7pm.If we're not online,leave your email and we'll get right back to you!</p>
                        </div>
                    </div>

                    <div className="col col-md-6 col-lg-3">
                        <div>
                            <Icon className='icon' icon="bi:card-checklist" />
                            <h6>Secure payments</h6>
                            <p>All payments are safe and secure. We use the most secure level of encryption available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;