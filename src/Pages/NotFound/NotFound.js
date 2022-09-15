import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFoundContainer'>
            <div className=' h-100 d-flex align-items-center justify-content-center'>
                <div className='text-center w-50'>
                    <h3>The requested URL was not found on this server.</h3>
                    <p>The requested URL was not found on this server.</p>
                    <p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p>
                    <Link className='fs-5 text-info fw-bold' to='/'>Home</Link>
                    <br />
                    <span className='menu-link'>menu-link</span>



                </div>
            </div>
        </div>
    );
};

export default NotFound;
