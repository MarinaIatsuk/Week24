import React from 'react';
import style from './Main.module.scss'
import data from '../../data.json'
import Line from '../Line/Line'
import Cards from '../Cards/Cards';

const Main = () => {
  
    //Отрисовала пока все карточки, что были в массиве. Как я поняла, чтобы показывать карточки поочередно, нужно каждой присвоить id и, например, при нажатии на кнопку, отрисовывать следующую карточку с индексом +1?
    return (
        <>
        <div  className={style.cards}> 
        {data.map(item => (
                <Cards
                    key={item.id}
                    english={item.english}
                    transcription={item.transcription}
                    russian={item.russian}
                />
            ))}
            </div>


<div className={style.table}>
            <div className={style.table__head}>
            <div className={style.table__number}>
            
            </div>
            <div className={style.table__english}>
            Слово на английском
            </div>
            <div className={style.table__transcription}>
            Транскрипция
            </div>
            <div className={style.table__russian}>
            Слово на русском
            </div>
            <div className={style.table__buttons}>
            
            </div>
            </div>
             
            {data.map(item => (
                <Line
                    key={item.id}
                    english={item.english}
                    transcription={item.transcription}
                    russian={item.russian}
                />
            ))}
        </div>
        </>

    );
};

export default Main;

