
import style from './App.module.scss'
import React from 'react';
import Cards from '../Cards/Cards';

const App = () => {
  const cardData=[
    {key:"green", price:300, speed:10, color:"green"},
    {key:"pink", price:450, speed:50, color:"pink"},
    {key:"blue", price:550, speed:100, color:"blue"},
    {key:"yellow", price:1000, speed:200, color:"green"}
  ]
  return (
    <div className={style.main}>
      {cardData.map(card=>(
        <Cards
        key={card.key}
        price={card.price}
        speed={card.speed}
        color={card.color}
        />
      ))}
    </div>
  );
};

export default App;