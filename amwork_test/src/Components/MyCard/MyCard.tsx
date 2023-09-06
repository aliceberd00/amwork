import React, {useEffect, useState} from "react";
import {IOneCardData} from '../../Types/dataTypes';
import mycard from './MyCard.module.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function createRandomTime(){
    const month = Math.floor(Math.random() * 12) +1;
    const day = Math.floor(Math.random() * 28) +1;
    const hoar = Math.floor(Math.random() * 23);
    const min = Math.floor(Math.random() * 59);
    return day + '/' + month + ' ' + hoar + ':' + min ;
}

const MyCard: React.FC<IOneCardData> = ({completed, id, title, userId}) => {
    // console.log(props);
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
                <div>
                    <p>Task description with long long long te...</p>
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