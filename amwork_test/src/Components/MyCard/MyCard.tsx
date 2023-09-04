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


// const card = (
//     <React.Fragment>
//         <CardContent>
//             <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 getAllData()
//             </Typography>
//             <Typography variant="h5" component="div">
//                 be nev o lent
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 adjective
//             </Typography>
//             <Typography variant="body2">
//                 well meaning and kindly.
//                 <br />
//                 {'"a benevolent smile"'}
//             </Typography>
//         </CardContent>
//     </React.Fragment>
// );


const MyCard = (props: IOneCardData) => {
    console.log(props);
    return (
        <>
           <h1>{props.title}</h1>
        </>
    )
};
export default MyCard;