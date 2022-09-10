import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './NewArrival.css'
import { FreeMode, Navigation, Pagination } from 'swiper';
import iPhon_X from '../../../assets/Images/iPhone-X.png'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewArrival = () => {
    return (
        <div className='newArrival py-5'>
            <div className='text-center container'>
                <h3 className='mb-3'>Get Your <span className='text-info'>Favourite Accessories</span></h3>

                <h5 className='text-center'><span className='text-info'>New</span> Arrival</h5>
                <div className='my-3'>
                    <span className='m-2 p-2 fw-bold'>Case And Protection</span>
                    <span className='m-2 p-2 fw-bold'>Battery</span>
                    <span className='m-2 p-2 fw-bold'>Headphones And Speaker</span>
                    <span className='m-2 p-2 fw-bold'>Power And Cables</span>
                </div>
                <div className=''>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper mt-4"
                    >
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                            <Link className='text-decoration-none' to='/one'>
                                        <Button variant="primary">
                                                Add to Card
                                            </Button>
                                                </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                        <Button variant="primary">Add to Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                        <Button variant="primary">Add to Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                        <Button variant="primary">Add to Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                        <Button variant="primary">Add to Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" className='w-100' src={iPhon_X} />
                                    <Card.Body>
                                        <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                        <p>999 Tk</p>
                                        <Button variant="primary">Add to Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div >
        </div >
    );
};

export default NewArrival;

