import React from 'react'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./style.css"
import SwiperCore, {
    Navigation,Pagination
} from 'swiper/core';
SwiperCore.use([Navigation,Pagination]);

function Slide() {

    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction"
                  }}
                navigation={true}
                className="mySwiper"
          
            >
                <SwiperSlide>
                    <div>
                    Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    Slide 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    Slide 3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                    Slide 4
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    )
}

export default Slide
