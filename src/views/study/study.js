import React, { useState } from 'react';
import style from './index.css';


const Study = () => {
  const [ but, setBut ]  = useState('点击我');

  function handleClick () {
    return setBut('我是被点击之后的内容');
  }
  
  return (
    <div onClick = { handleClick } >
      {but}
      <div className={style.title}>我是头部的内容<h2>sdfsdfsdfsd</h2></div>
    </div>
  )
}
export default Study;
