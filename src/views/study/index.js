import React, { useState, useEffect } from 'react';
import { getRequest } from '@/libs/api';
import style from './index.css';

import Modal from './modal';

// 接口的参数
const params = {
  type: 'data',
  channel: 'zaijia_xueersi',
  catalog: '一年级',
  limit: '30'
}

function Study() {

  const [datas, setDatas] = useState([]);
  // 请求数据 params 一定要定义值传的参数
  const getData = async () => {
    const result  = await getRequest(params);
    setDatas(result.data); // 更新datas里面的数据
  }
  useEffect( () => {
    getData();
  },[]);
  
  return (
    <>
      <div className={style.title}>
        <span>宅家学知识</span>
        <span>一年级</span>
      </div>
      <div className={style.studyBox}>
        {
          // 已经是return map函数不用在return 注意是()
          datas && datas.map((item,index) => (
            <div key={index} className={style.studyCon}>
              <a href={item.link}>
                 <div className={style.pic}>
                   <img src={item.image} alt=''/>
                   <i className={style.type}>{item.review}</i>
                 </div>
                 <div>
                   <h3>{item.title}</h3>
                   <div className={style.tags}>
                     <span>{item.catalog}</span>
                     <span>{item.subtitle}</span>
                   </div>
                 </div>
              </a>
            </div>
          ))
        }
      </div>
      <Modal/>
    </>
  )
}

export default Study;

