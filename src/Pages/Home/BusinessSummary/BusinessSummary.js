import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { BsBag } from "react-icons/bs";

const BusinessSummary = () => {
    const { CountOn, setCountOn } = useState(false);
    return (
        <div className='container'>
            <h1 className=' text-center'>Business <span className='text-info'>Summary</span></h1>

            <div className='row g-3 mt-4'>
                <div className='col col-md-6 col-lg-3 ' >
                    <div className=' text-center'>
                        <ScrollTrigger>
                        <BsBag className='fs-1 mb-4 ' />
                        <h1><CountUp start={0} end={100} duration={5} ></CountUp>+</h1>
                        </ScrollTrigger>
                        <small>SUCCESSFULLY REPAIRED DEVICES</small>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-3 ' >
                <div className=' text-center'>
                    <ScrollTrigger>
                    <BsBag className='fs-1 mb-4 '/>
                    <h1><CountUp start={0} end={100} duration={5} delay={0}></CountUp>+</h1>
                    </ScrollTrigger>
                    <small>PROFESSIONAL REPAIR SPECIALISTS</small>
                </div>
                </div>
                <div className='col col-md-6 col-lg-3 ' >
                    <div className=' text-center'>
                        <ScrollTrigger>
                        <BsBag className='fs-1 mb-4 ' />
                        <h1><CountUp start={0} end={100} duration={5} delay={0}></CountUp>+</h1>
                        </ScrollTrigger>
                        <small>YEARS OF SUCCESSFUL WORK</small>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-3'>
                    <div className=' text-center'>
                        <ScrollTrigger>
                        <BsBag className='fs-1 mb-4 ' />
                        <h1><CountUp start={0} end={100} duration={5} delay={0}></CountUp>+</h1>
                        </ScrollTrigger>
                        <small>ADVANCED SERVICING LABS</small>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;