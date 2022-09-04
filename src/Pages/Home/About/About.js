import React from 'react';
import TSJR from '../../../assets/Images/TSJR 1.png'
import { HiChevronRight } from "react-icons/hi";


const About = () => {
    return (
        <div className='my-5'>
            <div className='row container mx-auto'>
                <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h3 className='w-75'>We Can iCare Apple Almost As Fast As You Can Break It</h3>
                        <p>To solve any kind of problem-related to your Apple devices, we have all kinds of modern technologies, a highly developed lab, and skilled technicians.</p>
                        <button type="button" class="btn btn-outline-dark rounded-pill">About Us <HiChevronRight className='fs-3'/>
                        </button>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <img className='w-100' src={TSJR} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;