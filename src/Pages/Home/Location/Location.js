import React from 'react';
import shop from '../../../assets/Images/shop.png'

const Location = () => {
    return (
        <div className='mt-5'>
            <div className=''>
                <h3 className='text-center mb-4'>Our Office Location On Google Map</h3>
                <div className="row">
                    <div className='col col-md-6 col-lg-6 '>
                        <div>
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe width="100%" height="315" id="gmap_canvas" src="https://maps.google.com/maps?q=Bosila,Mohamudpur,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>
                                    <a href="https://2piratebay.org"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className='col col-md-6 col-lg-6 '>
                        <div>
                           <img className='w-100'height="315" src={shop} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;