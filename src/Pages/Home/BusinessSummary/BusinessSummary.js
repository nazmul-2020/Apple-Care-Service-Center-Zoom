import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container'>
            <h1>Business <span className='text-info'>Summary</span></h1>

            <div className='row g-4'>
                <div className='col col-md-6 col-lg-3 bg-dark g-4' >1</div>
                <div className='col col-md-6 col-lg-3 bg-info g-4' >1</div>
                <div className='col col-md-6 col-lg-3 g-4' >1</div>
                <div className='col col-md-6 col-lg-3 bg-dark g-4' >1</div>
            </div>

        </div>
    );
};

export default BusinessSummary;