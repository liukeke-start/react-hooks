import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import bannerImg from '@/static/banner.png'

import style from './index.css';

import SwiperCore, {
  Navigation,Pagination,Autoplay
} from 'swiper';

const bannerList = [
  {img:bannerImg},
  {img:bannerImg},
  {img:bannerImg},
]
const Banner = () => {
  SwiperCore.use([Autoplay,Pagination,Navigation]);
  return (
    <div className={style.banner}>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
        }} pagination={{
        "clickable": true
        }} navigation={true} 
        className="mySwiper">
        {
          bannerList.map((item,i) => {
            return (
              <SwiperSlide key={i}><img src={item.img} alt=''/></SwiperSlide>
            )
          })
        }
    </Swiper>
    </div>
  )
}
export default Banner
