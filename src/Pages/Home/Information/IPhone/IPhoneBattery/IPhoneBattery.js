import React from 'react';
import { Link } from 'react-router-dom';
import iphone13proMaxBattery from '../../../../../assets/Images/iPhoneRepair/one/iphone-13-pro-max-battery-300_200.png';

// import { Link } from 'react-router-dom';

const IPhoneBattery = () => {
    return (
        <div className='my-5'>
            <div className='iPhoneBanner'>
                <div className='overlay h-100 d-flex justify-content-center align-items-center'>
                    <div className='w-50 mx-auto text-center'>
                        <h4 className='text-white'>Battery Replacement</h4>
                        <span><Link to='/iPhoneId' className='text-white text-decoration-none '>iPhone 13 Pro Max</Link></span>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <h3 className='text-center mb-2'>iPhone 13 Pro Max Battery Replacement</h3>
                <div className='my-3 w-50 mx-auto'>
                    <Link to='/iPhoneBatterId' className='text-decoration-none text-dark'>
                        <div class="card shadow mx-auto" style={{ width: '15rem'}}>
                            <img src={iphone13proMaxBattery} class="card-img-top" alt="..." height='180' width='' />
                            <div class="card-body">
                                <h5 class="card-title">iPhone 13 Pro Max Original Battery</h5>
                                <p class="card-text">Assemble charge: 1000 TK</p>
                                <h4 className='text-danger'>8000 TK</h4>
                            </div>
                        </div>
                    </Link>
                    <hr />
                </div>
                <div className='w-75 mx-auto text-justify'>
                    <p>The iPhones have always provided their users with optimal specifications that perform up to expectation. One of the key features of the latest iPhone 13 Pro Max is the battery. The iPhone 13 Pro Max’s battery sits perfectly with the phone and gives its users the perfect experience. The iPhone 12 Pro Max offers a non-removable Lithium-Polymer battery that provides 4352 mAh. It supports fast wired and wireless charging which provides a 55% charge in 30 minutes. Although the iPhone provides an excellent battery, it will drain in time with wear and tear as the user uses it. They may face some issues with the phone’s battery.</p>
                    <h4>The possible battery issues of iPhone 13 Pro Max that a user may face are: </h4>
                    <ol>
                        <li>Charge Drain: Sometimes the battery of the iPhone 13 Pro Max drains faster than it should. Or sometimes the battery drains drastically in standby mode. This is a common issue reported by users after some period of prolonged usage.</li>
                            <li>Sudden Shutdown of Phones: Sudden Shutdown of Phones when battery percentage reaches 20: Some users report that their phone dies suddenly when the battery reaches 20%. This might be because your battery is old and swollen and needs to be replaced.</li>
                            <li>Battery Health Reduces Quickly: A common issue of Battery problems regarding iPhone 13 Pro Max is that the general Battery Health reduces too quickly. Our expert technicians can fix this issue with your phone efficiently.</li>
                            <li>Increase in Battery Thickness: The iPhone 13 Pro Max battery gets swollen/ increases in thickness after using it for an extended period of time. When a battery gets swollen, it runs the risk of damaging the phone. It should be replaced immediately because it is also a sign that the battery has run its course.</li>
                    </ol>
                    <div>
                        <p>If your iPhone 13 Pro Max faces any such issues with the battery, you need to get it looked at by professionals here at iCareApple bd. iCareApple bd specializes in iPhone-related issues. Here at iCareApple bd, we provide original battery replacements for your iPhone 13 Pro Max battery issues at a very reasonable price. We also offer quick service and provide a warranty on each of our services regarding your iPhone 13 Pro Max battery. We ensure our quality for the price you pay and guarantee that you will love our services. iCareApple BD has 4 service points ranging in Dhaka, Bangladesh.</p>
                    </div>
                    <p><Link to='/contact' className='fs-5 fw-bold text-dark'>Our Locations</Link></p>
                </div>

            </div>
        </div>
    );
};

export default IPhoneBattery;