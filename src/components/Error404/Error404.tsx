import React from "react";
import { NavLink } from "react-router-dom";
import {PATH} from "../Routes/Routes";
import style from "./Error404.module.css"


export const Error404: React.FC = React.memo(() => {

    return (
        <div className={style.error}>
            <div>ERROR 404</div>
            <div>The cat couldn't find a page!</div>
            <div className={style.errorCat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <nav>
                <div className={style.item}>
                    <NavLink to={PATH.PROFILE}>go home</NavLink>
                </div>
            </nav>
        </div>
    )
})