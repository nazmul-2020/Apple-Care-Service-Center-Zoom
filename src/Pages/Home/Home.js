import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import MobileRepair from './Banner/MobileRepair/MobileRepair';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Information from './Information/Information';
import ProfessionalRepair from './ProfessionalRepair/ProfessionalRepair';
// import Test from './Banner/Test';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <BusinessSummary/>
            <Information/>
            <MobileRepair/>
            <ProfessionalRepair/>            
            
        </div>
    );
};

export default Home;