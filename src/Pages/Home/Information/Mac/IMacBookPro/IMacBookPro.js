import React from 'react';
import { Link } from 'react-router-dom';

const IMacBookPro = () => {
    return (
        <div>
              <div className='iPhoneBanner'>
                <div className='overlay d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h1 className='text-white'>IMacBookPro</h1>
                        <p className='text-center  fw-bold'><Link className='text-decoration-none text-white ' to='/'>Back Home</Link></p>
                    </div>
                </div>
            </div>
            <h1>IMacBookPro</h1>
            <h1>IMacBookPro</h1>
            <h1>IMacBookPro</h1>
            <h1>IMacBookPro</h1>
            <h1>IMacBookPro</h1>
            <h1>IMacBookPro</h1>
        </div>
    );
};

export default IMacBookPro;