import React from "react";
import header from './Header.module.css'

function Header() {
    return(
    <div className={header.header}>
        <div className={header.today}>
        <h1>Today</h1>
        </div>
        <div className={header.button}>
            <button className={header.plus}>+</button>
            <p className={header.task}>2</p>
        </div>
    </div>
    )
}

export default Header