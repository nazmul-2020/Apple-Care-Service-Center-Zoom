import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CustomerReview.css'
import fbp from '../../../assets/Images/fb-p.jpg'

const CustomerReview = () => {
    return (
        <div className='customerReview '>
            <div className='overlay py-3'>
                <div className='container '>
                    <h1 className='text-white text-center'>Customer Reviews</h1>


                    <section className="special-slider px-12">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            loop={true}
                            freeMode={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="my-slider ">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Free Diagnostics Break</h2>
                                        <span className="text-info">Innovative Protection System</span>
                                        <p className='text-white w-50 mx-auto'>A reliable and efficient breaking system gurantees the safety of you and your family. We work only with leaders and trusted brands</p>

                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Discounted Summer</h2>
                                        <span className="text-info ">Seasonal Disposal of Residues</span>
                                        <p className='text-white w-50 mx-auto'>Discounts on summer tires and wheels are especially large this year. This is due to the elimination of last year's models from leading manufacturers. All tires and wheels are officially guaranteed.</p>
                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Sport Turbine With</h2>
                                        <span className="text-info">Turbine Discount Sale</span>
                                        <p className='text-white w-50 mx-auto'>If your car starts having problems with gaining speed or engine thrust has disappeared, most likely these are problems with the turbine. Our specialists will conduct computer diagnostics free of charge.</p>
                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Original Germany Oil</h2>
                                        <span className="text-info">Germany Oil With Sale</span>
                                        <p className='text-white w-50 mx-auto'>A special offer with a 30 percent discount from the German leader in the production of oils and chemicals for cars. Hurry up to purchase engine oil for all types of engines. Diagnostics and replacement free of charge.</p>
                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Auto-Clamping</h2>
                                        <span className="text-info">Innovative Charging Sensor</span>
                                        <p className='text-white w-50 mx-auto'>Wireless Car Charger combines an air vent phone mount holder and a wireless charger into one.Our Qi car charger has latest standard and built-in lastest smart chip with multiple protections such as overcharge.</p>
                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="my-slider md:px-28 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">

                                    <div className="content-special text-justify">
                                        <h2 className="text-white">Tire Inflator Air</h2>
                                        <span className="text-info">Compressor With Sale</span>
                                        <p className='text-white w-50 mx-auto'>Preset your desired pressure value, the tire pump will automatically shut off when the pre-set pressure has been achieved, So you don’t have to worry about over inflating or low tire pressure anymore. Convoy your safety all the way.</p>
                                    </div>
                                    <div className="im d-flex justify-content-center align-items-center">
                                        <div>
                                            <img className='d-blo mx-auto  border-info' src={fbp} alt="" />
                                        </div>
                                        <small className='text-white ms-3'>Nazmul</small>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;