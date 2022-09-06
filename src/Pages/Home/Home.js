import React from 'react';
import IcareApple from '../IcareApple/IcareApple';
import About from './About/About';
import Banner from './Banner/Banner';
import MobileRepair from './Banner/MobileRepair/MobileRepair';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import CustomerReview from './CustomerReview/CustomerReview';
import Discounted from './Discounted/Discounted';
import Information from './Information/Information';
import Location from './Location/Location';
import NewArrival from './NewArrival/NewArrival';
import OurService from './OurService/OurService';
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
            <NewArrival/>
            <Discounted/>
            <ScheduleRepair />
            <Videos/> 
            <IcareApple/>
            <Location/> 
            <OurService/>
            <CustomerReview/>    

        </div>
    );
};

export default Home;