import React, { useState, useEffect } from "react";
import style from "./index.css";

function Modal() {
  return (
    <div className={style.modalbox}>
      <div className={style.modalContent}>
        <div class={style.modalContent}>
          <h3>
            请选择年级<i>x</i>
          </h3>
          <div class={style.modalList}>
            <h5>小学</h5>
            <ul>
              <li>一年级</li>
              <li>二年级</li>
              <li>三年级</li>
              <li>四年级</li>
              <li>五年级</li>
              <li>六年级</li>
            </ul>
          </div>
          <div class={style.modalList}>
            <h5>初中</h5>
            <ul>
              <li>初一</li>
              <li>初二</li>
              <li>初三</li>
            </ul>
          </div>
          <div class={style.modalList}>
            <h5>高中</h5>
            <ul>
              <li>高一</li>
              <li>高二</li>
              <li>高三</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
