import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='detail'>
            <div className="hov"><img src="../images/SLCG.jpg" alt='실리카겔' /></div>
        </SwiperSlide>
        <SwiperSlide className='detail'>
            <div className="hov"><img src="../images/OKDAL.jpg" alt="옥상달빛" /></div>
        </SwiperSlide>
        <SwiperSlide className='detail'>
            <div className="hov"><img src="../images/10CM.jpg" alt="십센치" /></div>
        </SwiperSlide>
        <SwiperSlide className='detail'>
            <div className="hov"><img src="../images/SESONEON.jpg" alt="새소년" /></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
