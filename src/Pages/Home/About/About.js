import React from 'react';
import TSJR from '../../../assets/Images/TSJR 1.png'
import { HiChevronRight } from "react-icons/hi";
import './About.css'


const About = () => {
    return (
        <div className='py-5 aboutBanner'>
            <div className='row container mx-auto'>
                <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h3 className='w-75'>We Can iCare Apple Almost As Fast As You Can Break It</h3>
                        <p>To solve any kind of problem-related to your Apple devices, we have all kinds of modern technologies, a highly developed lab, and skilled technicians.</p>
                        <button type="button" className="btn btn-outline-dark rounded-pill">About Us <HiChevronRight className='fs-3' />
                        </button>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1000">
                    <img className='w-100' src={TSJR} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;