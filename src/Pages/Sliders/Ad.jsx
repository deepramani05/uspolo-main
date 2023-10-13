import React from "react";
import '../Css/Ad.css'

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Ad = () => {
  return (
    <div className="ad-main">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          The Official Online store for U.S. Polo Assn. in India
        </SwiperSlide>
        <SwiperSlide>Get 10% off on first purchase</SwiperSlide>
        <SwiperSlide>Free Shipping on orders above ₹1000</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ad;
