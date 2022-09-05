import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container'>
            <h1>Business <span className='text-info'>Summary</span></h1>

            <div className='row gap-4'>
                <div className='col col-md-6 col-lg-3 bg-dark gap-4' >1</div>
                <div className='col col-md-6 col-lg-3 bg-info gap-4' >1</div>
                <div className='col col-md-6 col-lg-3 gap-4' >1</div>
                <div className='col col-md-6 col-lg-3 bg-dark gap-4' >1</div>
            </div>

        </div>
    );
};

export default BusinessSummary;