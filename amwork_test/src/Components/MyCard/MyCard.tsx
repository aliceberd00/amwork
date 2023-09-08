import React, {useState} from "react";
import {IOneCardData} from '../../Types/dataTypes';
import mycard from './MyCard.module.css';
import Checkbox from '@mui/material/Checkbox';
import {faker} from "@faker-js/faker";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function createRandomTime(){
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const min = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return  day + '/' + month + ' ' + hour + ':' + min ;
}

const MyCard: React.FC<IOneCardData> = ({completed, id, title, userId}) => {
    return (
        <div className={mycard.mycard_container}>
            <div className={mycard.mycard}>
                <div className={mycard.task}>
                    <Checkbox{...label} />
                   <h1>{title}</h1>
                </div>
                    <div className={mycard.time}>
                       <h3>srart: {createRandomTime()}</h3>
                       <h3>finish: {createRandomTime()}</h3>
                    </div>
                <div className={mycard.description}>
                    <p>{faker.random.word()} </p>
                </div>
                <div className={mycard.footer}>
                    <div className={mycard.buttons}>
                        <button className={mycard.button1}>Entity title</button>
                        <button className={mycard.button2}>Front-end</button>
                    </div>
                    <img src="/images/Img.svg" />
                </div>
            </div>
        </div>
    )
};
export default MyCard;