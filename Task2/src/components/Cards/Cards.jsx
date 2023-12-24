
import style from './Cards.module.scss'
import React, { useState } from 'react';


const Cards = ({id, english, transcription, russian }) => {

    const [translation, setTranslation] = useState(false); 

    function showTranslation() {
        setTranslation(!translation)
    }

    return (
        <div  className={style.card} onClick={showTranslation}>
            <div className={style.card__word}>{english}</div>
            <div className={style.card__transcription}>{transcription}</div>
            {translation?<div className={style.card__translation}>{russian}</div>:
            <div className={style.card__button} onClick={showTranslation}>Нажмите, чтобы проверить себя</div>}
        </div>
    );
};

export default Cards;