import React from 'react';
import IcareApple from '../IcareApple/IcareApple';
import About from './About/About';
import Banner from './Banner/Banner';
import MobileRepair from './Banner/MobileRepair/MobileRepair';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Information from './Information/Information';
import Location from './Location/Location';
import ProfessionalRepair from './ProfessionalRepair/ProfessionalRepair';
import ScheduleRepair from './ScheduleRepair/ScheduleRepair';
import Videos from './Videos/Videos';
// import Test from './Banner/Test';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <BusinessSummary />
            <Information />
            <MobileRepair />
            <ProfessionalRepair />
            <ScheduleRepair />
            <Videos/> 
            <IcareApple/>
            <Location/>     

        </div>
    );
};

export default Home;