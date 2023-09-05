import React, {useEffect, useState} from "react";
import {IOneCardData} from '../../Types/dataTypes';
import mycard from './MyCard.module.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MyCard = (props: IOneCardData) => {
    console.log(props);
    return (
        <div className={mycard.mycard} >
            <div className={mycard.task}>
                <Checkbox{...label} />
               <h1>{props.title}</h1>
            </div>
            <div className={mycard.footer}>
                <div className={mycard.buttons}>
                    <button className={mycard.button1}>Entity title</button>
                    <button className={mycard.button2}>Front-end</button>
                </div>
                <img src="/images/Img.svg" />
            </div>
        </div>
    )
};
export default MyCard;