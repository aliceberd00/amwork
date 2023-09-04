import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import {Box} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            {/*<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
            {/*    Word of the Day*/}
            {/*</Typography>*/}
            {/*<Typography variant="h5" component="div">*/}
            {/*    be{bull}nev{bull}o{bull}lent*/}
            {/*</Typography>*/}
            {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
            {/*    adjective*/}
            {/*</Typography>*/}
            {/*<Typography variant="body2">*/}
            {/*    well meaning and kindly.*/}
            {/*    <br />*/}
            {/*    {'"a benevolent smile"'}*/}
            {/*</Typography>*/}
        </CardContent>
    </React.Fragment>
);

export type Title = {
    completed: boolean
    id: number
    title: string
    userId: number
}

export function ItsCard() {
    const [title, setTitle] = useState<Title[] | null>();
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        axios.get(url).then((response) =>{
            setTitle(response.data)
        })
    },[]);

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card  variant="outlined">{card}
                {title ? title.map((title)=>{
                    return <p>{title.title}</p>
                }) :null}
            </Card>
        </Box>
    )
}