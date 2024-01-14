import React, { useState } from 'react';
import style from './Main.module.scss';
import data from '../../data.json';
import Line from '../Line/Line';
import Cards from '../Cards/Cards';

const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0); //установили изначальный индекс для первой отрисованной карточки 0

    function goToPreviousCard() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }//функция показа предыдущей карточки: если индекс больше 0, то индекс устанавливается -1

    function goToNextCard() {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }//функция показа следующей карточки: если текущий индекс меньше последнего индекса в массиве то индекс устанавливается +1
//в Cards без перебора массива отрисовываем первую карточку массива с текущим индексом 0. Далее этот индекс может меняться (вызов порядкового номера объекта массива)
    return (
        <>
            <div className={style.cards}>
            <button onClick={goToPreviousCard} className={style.cards__button}>←</button>
                <Cards
                    key={data[currentIndex].id}
                    english={data[currentIndex].english}
                    transcription={data[currentIndex].transcription}
                    russian={data[currentIndex].russian}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
                
            <button onClick={goToNextCard}className={style.cards__button}>→</button>
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