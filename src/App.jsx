import './App.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

function App() {
  return (
    <div className="App">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>behruz</SwiperSlide>
        <SwiperSlide>isobek</SwiperSlide>
        <SwiperSlide>baxtishot</SwiperSlide>
        <SwiperSlide>davron</SwiperSlide>
        <SwiperSlide>ramazon</SwiperSlide>
        <SwiperSlide>yahyo</SwiperSlide>
        <SwiperSlide>javohir</SwiperSlide>
        <SwiperSlide>temuz</SwiperSlide>
        <SwiperSlide>ramazon </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
