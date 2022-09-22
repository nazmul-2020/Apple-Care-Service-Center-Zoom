import React from 'react';
import { Button, Card } from 'react-bootstrap';
import one from '../../assets/Images/one.png'
import sss from '../../assets/Images/sss.png'
import './One.css'

const One = () => {
    return (
        <div className='my-5'>
            <div className='container pt-5'>
                <div className='row g-3'>
                    <div className='col col-md-6 col-lg-6'>
                        <img src={one} alt="" />
                    </div>
                    <div className='col col-md-6 col-lg-6 d-flex align-items-center'>
                        <div>

                            <h4>iPhone 6/6s Clear Case</h4>
                            <p><span className='fw-bold'>Price</span> : 120</p>
                            <label className='fw-bold' htmlFor="">QUANTITY :</label>
                            <input type="number" className='aaa ms-2' name="" id="" />
                            <br />
                            <button className='btn mt-3 btn-outline-dark'>Add To Cart</button>

                        </div>
                    </div>
                </div>
                <div className='row g-3 mt-3'>
                    <div className='col col-md-6 col-lg-6'>
                        <div>
                            <h5>iPhone 6/6s Clear Case</h5>
                            <small>Overview:</small>

                            Dual-layer perimeter Sleek, tough outer shell with strategic dual layer perimeter protects against impact and absorbs shock.
                            <br />
                            Patented raised bezel screen protection. Raised bezel guards screen from direct drops onto phone face and prevents damage when lying flat.
                            <br />
                            See-through style. Crystal-clear back lets your iPhone's sophisticated design shine through, while accent colors around the edge of the case add style.
                            <br />
                            Responsive button protection. Rubberized covers protects volume and power buttons while maintaining true button responsiveness.

                            Compatibility:

                            iPhone 6/6s
                        </div>
                    </div>
                    <div className='col col-md-6 col-lg-6'>
                        <div>
                            <iframe className='d-block ms-auto' width="500" height="315" src="https://www.youtube.com/embed/Xj8frf07a1k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='row g-4 my-5'>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18r' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18m' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18em' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18em' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18em' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className='w-100' src={sss} />
                            <Card.Body>
                                <Card.Title>iPhone Xr/11 Curved</Card.Title>
                                <p>999 Tk</p>
                               
                                    <Button variant="primary">
                                        Add to Card
                                    </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default One;