import React,{useState} from "react";
import style from './index.css';
import bannerImg from '@/static/banner.png'


const Banner = () => {

  return (
    <div className={style.banber}>
      <div><img src={bannerImg} alt=''/></div>
      <div><img src={bannerImg} alt=''/></div>
      <div><img src={bannerImg} alt=''/></div>
    </div>
  )

}

export default Banner