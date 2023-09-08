import React from "react";
import header from './Header.module.css'
import {IOneCardData} from "../../Types/dataTypes";
import count from "./Count/Count.module.css";

interface Props {
    items: Array<IOneCardData>;
}
export function Header (allCards: Props) {
    return(
    <div className={header.header}>
        <div className={header.today}>
        <h1>Today</h1>
        </div>
        <div className={header.button}>
            <button className={header.plus}>+</button>
            <p className={header.task}> {allCards.items.length.toString()}</p>
        </div>
    </div>
    )
}

export default Header