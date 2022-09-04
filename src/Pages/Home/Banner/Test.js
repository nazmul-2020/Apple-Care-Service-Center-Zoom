// import React from 'react';
// import Swiper from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner from '../../../assets/Images/banner.png'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const Test = () => {
    return (
        <div>
            <h1 className='text-center'>Hi</h1>

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='bg-info'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-dark'>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}



{/* <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            <img className='w-100' src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-'>
            <img className='w-100'src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-info'>
            <img className=' w-100'src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>

        {/* <SwiperSlide className='bg-info'>Slide 2</SwiperSlide>
        <SwiperSlide className='bg-info'>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> 
        
      </Swiper>
    </> */}

<>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>
        <SwiperSlide className='bg-i'>
            <img className='w-50'src={banner} alt="" />
         </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>

        </div>
    );
};

export default Test;