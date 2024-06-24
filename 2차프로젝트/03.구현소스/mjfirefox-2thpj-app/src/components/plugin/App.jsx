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
const setArr = [
  ["slide1","SLCG","실리카겔"],
  ["slide2","OKDAL","옥상달빛"],
  ["slide3","10CM","십센치"],
  ["slide4","SESONEON","새소년"],
];


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
        {
          setArr.map((v, i) => {
            return (
              <SwiperSlide className='detail' key={i}>
                <div className={"hov "+v[0]}><img src={`../images/${v[1]}.jpg`} alt={v[2]} /></div>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
}
