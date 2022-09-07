import React from 'react';
import servesMan from '../../../assets/Images/servesMan.png'

const ProfessionalRepair = () => {
    return (
        <div className='py-5 banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col col-md-12 col-lg-6 d-flex align-items-center '>
                        <div className=''>
                            <h4>Your device in safe hands with <br /> <span className='text-info'>Our Professional Repair</span> Technicians</h4>
                            <p>In repairing Apple devices, no one can beat our success rate in Bangladesh. We can repair things that nobody could ever think of ...
                                Finding a trustworthy and trained Apple device technicians in Bangladesh is very difficult. We've seen so many of our beloved clients wandering around and getting cheated by fake technicians. When the name 'iCare Apple' was discovered, they felt relaxed and free, they said.</p>
                        </div>
                    </div>
                    <div className='col col-md-12 col-lg-6'>
                        <img className='w-100' src={servesMan} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfessionalRepair;