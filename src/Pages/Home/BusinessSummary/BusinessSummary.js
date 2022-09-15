import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { GrServices } from "react-icons/gr";
import { TbFileCertificate } from "react-icons/tb";
import { Icon } from '@iconify/react';
import { FaHandsHelping } from 'react-icons/fa';
import'./BusinessSummary.css'

const BusinessSummary = () => {
    const { CountOn, setCountOn } = useState(false);
    return (
        <div className='aboutBanner'>
            <div className='container'>
                <h1 className=' text-center'>Business <span className='text-info'>Summary</span></h1>

                <div className='row g-3 mt-4 pb-3'>
                    <div className='col col-md-6 col-lg-3 ' >
                        <div className=' text-center'>
                            <ScrollTrigger>
                                <TbFileCertificate className='mb-2 busi-icon' />
                                <h3 className='mb-0'><CountUp start={0} end={18} duration={5} ></CountUp>+</h3>
                            </ScrollTrigger>
                            <small>Year of Experience</small>
                        </div>
                    </div>

                    <div className='col col-md-6 col-lg-3 ' >
                        <div className=' text-center'>
                            <ScrollTrigger>

                                <Icon className='mb-2 busi-icon ' icon="carbon:task-complete" />
                                <h3 className='mb-0'><CountUp start={0} end={200} duration={5} delay={0}></CountUp>+</h3>
                            </ScrollTrigger>
                            <small>PROFESSIONAL REPAIR SPECIALISTS</small>
                        </div>
                    </div>
                    <div className='col col-md-6 col-lg-3 ' >
                        <div className=' text-center'>
                            <ScrollTrigger>
                                <FaHandsHelping className='mb-2 busi-icon' />
                                <h3 className='mb-0'><CountUp start={0} end={22} duration={5} delay={0}></CountUp>+</h3>
                            </ScrollTrigger>
                            <small>EXPORTING OF CLIENTS</small>
                        </div>
                    </div>
                    <div className='col col-md-6 col-lg-3'>
                        <div className=' text-center'>
                            <ScrollTrigger>
                                <GrServices className='mb-2 busi-icon' />
                                <h3 className='mb-0'><CountUp start={0} end={240} duration={5} delay={0}></CountUp>+</h3>
                            </ScrollTrigger>
                            <small>ADVANCE LAB SERVICE</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;