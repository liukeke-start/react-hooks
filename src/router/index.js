import React from "react";
// BrowserRouter as Router 相当于给 BrowserRouter 重新命名为 Router
import {BrowserRouter as Router, Route, Routes ,NavLink } from 'react-router-dom';
import Study from '@views/study';
import Food from '@views/food';
import Novel from '@views/novel';
import Video from '@views/video';
import Shopping from '@views/shopping';
import Know from '@views/know';

import style from './index.css';


const Routerlist = () => {
  return (
    <Router>
       <div className={style.header}>
          <ul>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/study">学知识</NavLink ></li>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/Food">做美食</NavLink ></li>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/Novel">看小说</NavLink ></li>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/video">看视频</NavLink ></li>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/Shopping">轻松购</NavLink ></li>
            <li><NavLink className={(navData) => navData.isActive ? style.active : ' '} to="/Know">知疫情</NavLink ></li>
          </ul>
        </div>
        <Routes>
          <Route path="/"  element={<Study/>}/>
          <Route path="/study" element={<Study/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/novel" element={<Novel/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/know" element={<Know/>}/>
        </Routes>
      </Router>
  )
}
export default Routerlist
