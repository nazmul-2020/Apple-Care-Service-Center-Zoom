import React from 'react';
import './Videos.css'

const Videos = () => {
    return (
        <div className=' my-4'>
            <div className='container my-4'>
                <div className='row g-4'>
                    <div className='col-12 col-md-6 col-lg-6 '>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9hA59nn7uQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 '>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9hA59nn7uQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Videos;