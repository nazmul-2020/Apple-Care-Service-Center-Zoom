import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className=' mt-'>
            <div className='aboutUsBanner'>
                <div className='overlay h-100 d-flex align-items-center justify-content-center'>
                    <div className='text-white'>
                        <h3>About</h3>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <h4 className='text-center'>ABOUT iCare Apple</h4>
                <div className="row g-4 py-3">
                    <div className="col col-md-6 col-lg-6">
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,. </p>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-6">
                        <div className=''>
                            <iframe className='mx-auto d-block' width="75%" height="250" src="https://www.youtube.com/embed/OTTAGSr0BMI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 aboutContactBanner'>
                <div className='w-50 py-5 px-4  mx-auto bg-light shadow-lg'>
                    <div className='d-flex justify-content-between'>
                        <input className='w-50 p-2 me-2 border-info' placeholder="Name" type="name" name="" id="" />
                        <input className='w-50 ms-2  border-info' type="email" placeholder='Email' name="" id="" />
                    </div>
                    <textarea className="mt-3 w-100 messageField border-info" placeholder="Message"></textarea>
                    <button type="button" className="btn btn-info d-block mx-auto mt-3">Send Message</button>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;