import React, {useEffect, useState} from "react";
import axios from "axios/index";
import {Box} from "@mui/material";
import Card from "@mui/material/Card";
import {Title} from "../../Card/ItsCard";
import {IOneCardData} from '../../Types/dataTypes'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import mycard from './MyCard.module.css'
import {getAllData} from "../../Requests/getAllCards";

const MyCard = (props: IOneCardData) => {
    console.log(props);
    return (
        <div className={mycard.mycard} >
           <h1>{props.title}</h1>
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