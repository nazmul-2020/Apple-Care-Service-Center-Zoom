import React from 'react';
import iPhone_X from '../../assets/Images/iPhone-X.png';

const IcareApple = () => {
    return (
        <div className='my-1 py-3 banner'>
            <div className='container'>
                <h3 className='text-center'>Why Choose <span className='text-info'>iCare Apple ?</span></h3>

                <div className="row g-2 mt-4">
                    <div className="col col-md-6 col-lg-4">
                        <div className=''>
                            <div>
                                <h5>Free Diagnostic Checkup</h5>
                                <p>Only we are providing you with a free diagnostic check-up on your Apple devices where all of the software and hardware issues will be checked by our expert technicians </p>
                            </div>
                            <div>
                                <h5>Money Back Guaranty</h5>
                                <p>In case you are not satisfied with our service, we are happy to give you all the money back within 30 days without making you go through any complicated procedure.</p>
                            </div>
                            <div>
                                <h5>Expert Technicians</h5>
                                <p>Our technicians have gained many years of experience by serving our valued customers. So you can expect to have the best services from our skilled technicians.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-4">
                        <div>
                            <img className='w-100' src={iPhone_X} alt="" />
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-4">
                        <div className='text-end'>
                            <div>
                                <h5>Advanced Service Lab</h5>
                                <p>To fix complicated issues we are not only relying on expert technicians but also on advanced servicing labs. In Bangladesh, no one has a better servicing lab than us.</p>
                            </div>
                            <div>
                                <h5>Quick Repair</h5>
                                <p>No one likes to stay away from their mobile for long periods. So we are providing a quick repair service where you will get your device fixed faster than you ever imagined.</p>
                            </div>
                            <div> <h5>Friendly Support</h5>
                                <p>You will not only get your device fixed when you come to us but also our friendly support team will make you feel like it's a home. So, you will never hesitate to visit us again and again.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IcareApple;