import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className=''>
            <div className='d-flex mt-5'>
                <div className='m-5 mx-auto p-4 shadow-lg form-container rounded'>
                <AiOutlineUser className='login-icon' />
                    <h3 className='text-center text-dark'> Please Log In</h3>
                    <Form className=' '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        {/* {errorElement} */}
                        <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                            Log In
                        </Button>
                        <p className='pt-2  mb-0'>Don’t have an account?<Link to='/signup' className='text-primary font-weight-bold pe-auto ms-1 '> Sign Up Now !</Link></p>
                        <p className='mb-0'><button className='btn btn-link text-danger pe-auto text-decoration-none'>Reset Password?</button></p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;