import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Button, Card } from 'react-bootstrap';
import iPhon from '../../../assets/Images/iPhone-X.png'

const Discounted = () => {
    return (
        <div className='py-5 newArrival'>
            <div className='container'>
                <h3 className='text-center'><span className='text-info'>MOST</span> DISCOUNTED</h3>
                <div className='my-3 text-center'>
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
                    className="mySwiper mt-4 text-center"
                >
                    <SwiperSlide>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
                                <Card.Img variant="top" className='w-100' src={iPhon} />
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
            </div>
        </div>
    );
};

export default Discounted;