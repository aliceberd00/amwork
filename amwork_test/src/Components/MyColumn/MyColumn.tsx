import React from "react";
import {IOneCardData} from "../../Types/dataTypes";
import MyCard from "../MyCard/MyCard";
import mycolum from './MyColumn.module.css'
interface Props {
    items: Array<IOneCardData>;
}
export function MyColumn (allCards: Props){
    return (
        <div className={mycolum.mycolum}>
            {allCards.items.map((e) => {return <MyCard title={e.title} id={e.id} userId={e.userId} completed={e.completed} />})}
        </div>
    )
}