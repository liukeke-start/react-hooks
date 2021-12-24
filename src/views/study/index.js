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
  const [datas, setDatas] = useState([]);
  // 请求数据 params 一定要定义值传的参数
  const creat = async () => {
    const result  = await getRequest(params);
      setDatas(result.data);
  }
  useEffect( () => {
    creat();
  },[]);
  
  return (
    <div className={style.studyBox}>
      {/* {
        datas && datas.map((item,index) => (
          <div>{index}{item.title}</div>
        ))
      } */}
      {
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
  )
}
export default Study;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const params = {
//   type: 'data',
//   channel: 'zaijia_xueersi',
//   catalog: '一年级',
//   limit: '30'
// }
// function Study() {
//   const [data, setDatat] = useState({ hits: [] });

//   useEffect(async () => {
//     // const result = await axios(
//     //   'http://hn.algolia.com/api/v1/search?query=redux',
//     // );
//     const result = await getRequest(params);
//     setDatat(result.data);
//     console.log(result)
   
//   }, []);
//   // console.log(data)
//   return (
//     <ul>
//       {/* {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))} */}
//     </ul>
//   );
// }

// export default Study;

