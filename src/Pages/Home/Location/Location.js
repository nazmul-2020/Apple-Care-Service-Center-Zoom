import React from 'react';
import shop from '../../../assets/Images/shop.png'

const Location = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <h3 className='text-center mb-4'>Our Office Location On Google Map</h3>
                <div className="row g-4">
                    <div className='col-12 col-md-6 col-lg-6 '>
                        <div>
                            <div className="mapouter w-100">
                                <div className="gmap_canvas ">
                                    <iframe width="100%" height="315" id="gmap_canvas" src="https://maps.google.com/maps?q=Bosila,Mohamudpur,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                    </iframe>
                                    <a href="https://2piratebay.org"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className='col-12 col-md-6 col-lg-6 '>
                        <div className='w-100'>
                           <img className='w-100'height="315" src={shop} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;