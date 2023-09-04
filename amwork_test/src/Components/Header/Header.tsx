import React from "react";
import header from './Header.module.css'

// import { createSvgIcon } from '@mui/material/utils';
//
// const PlusIcon = createSvgIcon(
//     // credit: plus icon from https://heroicons.com/
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//     >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//     </svg>,
//     'Plus',
// );
function Header() {
    return(
    <div className={header.header}>
        <h1>Today</h1>
        <div className={header.plus}>
            {/*<PlusIcon className={header.plus}/>*/}
            <h2>+</h2>
            <p className={header.task}>2</p>
        </div>
    </div>
    )
}

export default Header