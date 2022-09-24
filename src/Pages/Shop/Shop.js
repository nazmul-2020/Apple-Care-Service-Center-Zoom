import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { Button, Card } from 'react-bootstrap';
import './Shop.css';
import Spidercae from '../../assets/Images/iPhoneRepair/Spidercae-iPhone-11.png'
import headphone from '../../assets/Images/iPhoneRepair/headphone-and-speaker.png'
import smartphone_usb from '../../assets/Images/iPhoneRepair/smartphone-usb.png'
import iphone_xr from '../../assets/Images/iPhoneRepair/one/iphone-xr-11-screen.png'
import protector from '../../assets/Images/iPhoneRepair/one/2protector.png'
import iphone_xr11 from '../../assets/Images/iPhoneRepair/one/iphone_xr11.png'
import iphoneHD from '../../assets/Images/iPhoneRepair/one/iphoneHD.png'
import iphone_x from '../../assets/Images/iPhoneRepair/one/iphone_x.png'
import iphone_r11 from '../../assets/Images/iPhoneRepair/one/iphone_r11.png'
import iphone_11 from '../../assets/Images/iPhoneRepair/one/iphone_11.png'
import shipping from '../../assets/Icon/Quick Shipping 1.png'
import Quick from '../../assets/Icon/Quick Shipping 2.png'
import QuickShipping from '../../assets/Icon/Quick Shipping 3.png'
import iPhon_X from '../../assets/Images/iPhone-X.png'





const Shop = () => {
    return (
        <div className=''>
            <div className='shopBanner'>
                <div className='overlay h-100 d-flex align-items-center justify-content-center'>
                    <div className=''>
                        <h1 className='text-white'>Well Come To Our Shop</h1>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h3 className='text-center my-3'><span className='text-info'>Featured</span> Categories</h3>
                <div className='row g-3 mb-3'>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Case & Protection</h6>
                            <img width='91' src={Spidercae} alt="" />
                        </div>
                    </div>

                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6> Headphones & Speaker</h6>
                            <img width='91' src={headphone} alt="" />
                        </div>
                    </div>

                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Power & Cables</h6>
                            <img width='91' src={smartphone_usb} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Mouse & Keypad</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Display</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                    <div className='col col-md-4 col-lg-4'>
                        <div className='d-flex align-items-center justify-content-between p-3 category-card'>
                            <h6>Battery</h6>
                            <img src={Spidercae} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3 accessories'>
                <div className='text-center'>
                    <h4>AUTHENTIC APPLE ACCESSORIES IN BANGLADESH</h4>
                    <h4>Select Your <span className='text-white'>Accessories</span></h4>
                    <div class="container">
                        <div class="row mt-4 g-4 w-75 mx-auto">
                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select   p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select  p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 ">
                                <div>
                                    <select className="form-select  border- p-2 rounded-0" aria-label="Default select example">
                                        <option className='p-1' value="1">MacBook Pro</option>
                                        <option value="2">iMac</option>
                                        <option value="3">Mac min</option>
                                        <option value="3">MacBook</option>
                                        <option value="3">MacBook Air</option>
                                        <option value="3">iPad</option>
                                        <option value="3">Apple Watch</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-12 col-md-4 col-lg-3 bg-inf ">
                                <div>
                                    <button className='btn btn-primary rounded-0 d-block mx-auto'>Find product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className=''>
                        <h3>What We Offer</h3>
                    </div>

                    <div>
                        <span className='me-2 fs-5'>Featured</span>
                        <span className='fs-5'>New arrivals</span>
                    </div>
                </div>

                <div className='row g-1'>
                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={protector} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine Select USB-C 2.0 Cable - 3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button disabled className='btn btn-sm btn-outline-primary rounded-0 my-1 '>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr11} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker Soundcore Q10i Wireless Headphone</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphoneHD} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker Soundcore Life Note 3i True Earbuds</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_x} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker Soundcore Wakey Bluetooth Speaker</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_r11} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker Soundcore Life P2i True Wireless Earbuds</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_11} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker Soundcore Life P2i True Wireless Earbuds</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-2'>
                        <div className='my-2 p-1 category-card border-info rounded-0'>
                            <img src={iphone_xr} alt="" />
                            <span>10%</span>
                            <div className='text-center mt-2'>
                                <p className='m-0'>Anker PowerLine USB-C to USB-C 2.0-3ft</p>
                                <p className='m-0 mt-1'>200 Tk</p>
                                <button className='btn btn-sm btn-outline-primary rounded-0 my-1'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-6 col-lg-3 '>
                        <div className='d-flex align-items-center justify-content-between ggg p-3'>
                            <div>
                                <img className='border rounded-circle border-white p-1' src={shipping} alt="" />
                            </div>
                            <div className='text-center ms-'>
                                <p className='m-0'>Quick Shipping Super fast delivery service</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-3 '>
                        <div className='d-flex align-items-center justify-content-between ggg p-3'>
                            <div>
                                <img className='border rounded-circle border-white p-1' src={Quick} alt="" />
                            </div>
                            <div className='text-center ms-'>
                                <p className='m-0'>Instant Support Connect through chat / call</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-3 '>
                        <div className='d-flex align-items-center justify-content-between ggg p-3'>
                            <div>
                                <img className='border rounded-circle border-white p-1' src={QuickShipping} alt="" />
                            </div>
                            <div className='text-center ms-'>
                                <p className='m-0'>Quick Shipping Super fast delivery service</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-3 '>
                        <div className='d-flex align-items-center justify-content-between ggg p-3'>
                            <div>
                                <img className='border rounded-circle border-white p-1' src={shipping} alt="" />
                            </div>
                            <div className='text-center ms-'>
                                <p className='m-0'>Easy payment Multiple payment option</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <h2 className='text-center'><span className='text-info'>TOP</span> SELLING</h2>

                    <div className='my-3 text-center'>
                        <Link to='/'><span className='m-2 p-2 fw-bold'>Case And Protection</span></Link>
                        <Link to='/'><span className='m-2 p-2 fw-bold'>Battery</span></Link>
                        <Link to='/'><span className='m-2 p-2 fw-bold'>Headphones And Speaker</span></Link>
                        <Link to='/'><span className='m-2 p-2 fw-bold'>Power And Cables</span></Link>
                    </div>

                    <div className=''>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper py-4 my-4"
                    >
                        <SwiperSlide>
                            <div width='100 mt-3'>
                                <Card style={{ width: '200', }}>
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
                                <Card style={{ width: '18m' }}>
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
                                <Card style={{ width: '18m' }}>
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
                                <Card style={{ width: '1m' }}>
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
                                <Card style={{ width: '18m' }}>
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
                                <Card style={{ width: '18m' }}>
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
                </div>
            </div>
        </div>
    );
};

export default Shop;