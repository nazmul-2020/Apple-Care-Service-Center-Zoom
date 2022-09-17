import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='mt-5'>
            <div className='blogBanner'>
                <div className='overlay h-100 d-flex align-items-center justify-content-center'>
                    <h3 className='text-white'>Contact Us</h3>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='text-center'>
                    <h3>Contacts us</h3>
                    <hr className='hr mx-auto' />
                    <p className='text-info fw-bold'>HAVE ANY QUESTIONS?</p>
                    <p className='w-50 mx-auto'>Contact icare Apple Cell Phone Repair for assistance with customer service,
                        maintenance plans, business inquiries, and franchise opportunities.</p>
                </div>

                <div className='bg-img'>
                    <div className='overlay h-100'>
                        <div className='row'>
                            <div className='col col-md-6 col-lg-6 '>
                                <div className='border border-danger border-2 m-3 bg-white'>
                                    <div className=' m-3 '>
                                        <label>Name <span className='text-danger'>*</span></label>
                                        <input className=' p-2  w-100' required placeholder="Name" type="name" name="" id="" />
                                        <label className='mt-3'>Email <span className='text-danger'>*</span></label>
                                        <input className=' p-2  w-100 ' type="email" placeholder='Email' required name="" id="" />
                                        <label className='mt-3'>Subject <span className='text-danger'>*</span></label>
                                        <input className=' p-2  w-100' required placeholder="Subject" type="text" name="" id="" />
                                        <label className='mt-3'>Message <span className='text-danger'>*</span></label>
                                        <textarea className=" w-100  messageField " required placeholder="Message"></textarea>
                                        <button type="button" className="btn btn-info d-block mx-auto mt-3">Send Message</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col col-md-6 col-lg-6'>
                                <div className="mapouter w-100 h-100">
                                    <div className="gmap_canvas h-100 d-flex align-items-center justify-content-center m-3 ">
                                        <iframe width="100%" height="315" id="gmap_canvas" src="https://maps.google.com/maps?q=Bosila,Mohamudpur,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe>
                                        {/* <a href="https://2piratebay.org"></a> */}
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

export default ContactUs