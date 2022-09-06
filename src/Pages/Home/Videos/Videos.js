import React from 'react';
import './Videos.css'

const Videos = () => {
    return (
        <div className=' my-4'>
            <h1>videos</h1>
            <div className='container my-4'>
                <div className='row g-4'>
                    <div className='col col-md-12 col-lg-6 '>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9hA59nn7uQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='col col-md-6 col-lg-6 '>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/p9hA59nn7uQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Videos;