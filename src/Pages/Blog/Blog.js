import React from 'react';
import './Blog.css';
import bl1 from '../../assets/Images/bl1.png'
import bl2 from '../../assets/Images/bl2.png'
import bl3 from '../../assets/Images/bl3.png'
import { Button, Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div >
            <div className='my-5  blogBanner'>
                <div className='d-flex align-items-center justify-content-center   overlay h-100'>
                    <div className=''>
                        <h1 className=' text-white'>Blog</h1>

                    </div>
                </div>

            </div>
            <div>
                <h3 className='text-center'>iCare Apple Blog</h3>

                <div className="container pb-5">
                <div className="row g-3">
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '1' }}>
                            <Card.Img variant="top" src={bl1} />
                            <Card.Body>
                                <Card.Title>How will a new phone system help my business?</Card.Title>
                                <Card.Text>
                                    It doesn’t matter whether your company is 5 minutes old, or 5 years old
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card >
                            <Card.Img variant="top" src={bl2} />
                            <Card.Body>
                                <Card.Title>How will a new phone system help my business?</Card.Title>
                                <Card.Text>
                                    It doesn’t matter whether your company is 5 minutes old, or 5 years old
                                </Card.Text>
                                <Button className='' variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card >
                            <Card.Img variant="top" src={bl3} />
                            <Card.Body>
                                <Card.Title>Calling emergency services in Storm Eunice</Card.Title>
                                <Card.Text>
                                As much of England and Wales braces for the unseasonal storms, many of us are

                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '1' }}>
                            <Card.Img variant="top" src={bl2} />
                            <Card.Body>
                                <Card.Title>How to get the most out of your newest member of staff  – your Digital Receptionist</Card.Title>
                                <Card.Text>
                                It’s day one in the office and you don’t know where anything is or how

                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '1' }}>
                            <Card.Img variant="top" src={bl3} />
                            <Card.Body>
                                <Card.Title>iCare Apple services: How popular are they?</Card.Title>
                                <Card.Text>
                                    It doesn’t matter whether your company is 5 minutes old, or 5 years old
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col col-md-6 col-lg-4'>
                        <Card style={{ width: '1' }}>
                            <Card.Img variant="top" src={bl1} />
                            <Card.Body>
                                <Card.Title>How will a new phone system help my business?</Card.Title>
                                <Card.Text>
                                    It doesn’t matter whether your company is 5 minutes old, or 5 years old
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
        </div >
    );
};

export default Blog;