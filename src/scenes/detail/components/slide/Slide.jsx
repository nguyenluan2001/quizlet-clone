import React, { useState,useRef } from 'react'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./style.css"
import SwiperCore, {
    Navigation, Pagination, EffectCoverflow
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Slide({ terms }) {

    
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction"
                }}
                navigation={true}
                className="mySwiper"
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
            >
                {
                    terms?.map(item => {

                        return <SwiperSlide>
                            <div class="flip-card" >
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        {item.word}
                                    </div>
                                    <div class="flip-card-back">
                                        {item.definition}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </>
    )
}

export default Slide
