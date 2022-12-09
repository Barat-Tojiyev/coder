import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useContext } from 'react';
import { ProductContext } from '../../context';
import './style.css'

export const Like = () => {
    const [state,dispatch]=useContext(ProductContext)
  return (
    <div>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       {state?.likes?.map((value)=>{
        return (
          <SwiperSlide key={value?.id}>
            <img src={value.img} alt="#" />
         </SwiperSlide>
        )
       })}
       
       
      </Swiper>
    </div>
  )
}
