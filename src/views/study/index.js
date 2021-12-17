import React, { useState, useEffect } from 'react';
import { getRequest } from '@/libs/api';
import style from './index.css';

const params = {
  type: 'data',
  channel: 'zaijia_xueersi',
  catalog: '一年级',
  limit: '30'
}

function Study() {

  const [datas, setDatas] = useState({
    data: [],
  });

  useEffect(() => {
    // params 一定要定义值传的参数
    // const result = async () => {
    //   getRequest(params).then((res) => { 
    //     setDatas(result.datas);
    //     return res.data; 
    //   });
    // }
    // result();

    // console.log()
    
  },[]);
  
  return (
    
    <div className={style.studyBox}>
      {
        // datas.data.map((item,i) => {

        // })
      }
      <div className={style.studyCon}>
       <a href="#">
          <div className={style.pic}>
            <img src='https://s2.loli.net/2021/12/16/nOHvdRcbLtKQClT.png' alt=''/>
            <i className={style.type}>语文</i>
          </div>
          <div>
            <h3>我是标题内容</h3>
            <div className={style.tags}>
              <span>学而思网校</span>
              <span>2012-11-30</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
export default Study;
