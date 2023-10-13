import React from 'react'
import "../Css/Home.css";



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";




const Banner = () => {
  return (
    <div>
        <div className="banner-main">
        <div className="banner-sub">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/TB2_9c0ce713-d388-412c-8084-7927409776b0_1944x.jpg?v=1695191002" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/13SEP23-USPA-FOOTWEAR-TB2-DSK_1944x.jpg?v=1695191002" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://uspoloassn.in/cdn/shop/files/13SEP23-USPA-ALL_LEGENDS-TB1-GL-DSK_2x_80532ba7-4a95-4308-9929-29f82912f730_1944x.jpg?v=1695191003" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Banner