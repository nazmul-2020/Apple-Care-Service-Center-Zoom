import React from 'react';
import repair from '../../../assets/Images/repair.png'

const ScheduleRepair = () => {
    return (
        <div className='my-5'>
            <div className='container'>
                <h2 className='mb-4 text-center'>Schedule your iPhone repair</h2>
                <div className='row g'>
                    <div className='col col-md-6 col-lg-6'>
                        {/* <h2 className='mb-4 text-center'>Schedule your iPhone repair</h2> */}
                  
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5>How much will it cost?</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>You won't pay more for Apple authorized service and repairs at Best
                                                Buy. Prices may vary depending on model and type of repair
                                                needed. Choose your iPhone to see a chart with typical repairs and pricing.</p>
                                        </div>

                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <h5>How long will it take?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>We offer same-day service for iPhone screen repair. Simply schedule an appointment
                                                    and bring in your iPhone.*Please refer to same day iPhone repair in the disclaimer section
                                                    For other repairs, your Agent will give you an initial estimate on how long it will take.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <h5>Where can I get my repair done?</h5>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p> Schedule an appointment and bring your iPhone to any Best Buy store near you. Apple
                                                    repairs and same-day iPhone screen replacement are available at all Best Buy stores.*</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    <div className='col col-md-6 col-lg-6  '>
                        <img className='w-100' src={repair} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleRepair;