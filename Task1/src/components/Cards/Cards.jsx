import style from './Cards.module.scss'
import React, { useState } from 'react';


const Cards = ({price,speed,color}) => {
 const [active, setAсtive]=useState(false)
 function changeActive() {
    setAсtive(!active)
 }

//  const cardStyle = {
//     transform: active ? 'scale(1.2)' : 'scale(1)',
//   };
//style={cardStyle}

  
    return (
        <div onClick={changeActive}  className={`${style.container} ${style[`container-${color}`]} ${active?style.transform:""}`}> 
            <div className={`${style.container__head} ${style[`container-${color}__head`]}`}>Безлимитный {price}</div>
            <div className={`${style.container__price} ${style[`container-${color}__price`]}`}><span>руб</span> {price} /мес</div>
            <div className={`${style.container__speed} ${style[`container-${color}__speed`]}`}> до {speed} Мбит/сек</div>
            <div className={`${style.container__terms} ${style[`container-${color}__terms`]}`}>Объем включенного трафика не ограничен</div>
        </div>
    );
};

export default Cards;
