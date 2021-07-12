import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../../features/Login/Login";
import {Profile} from "../../features/Profile/Profile";
import {Error404} from "../Error404/Error404";

export const PATH = {
    PROFILE: "/",
    LOGIN: "/login",
    ERROR: "/404"
}


export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.ERROR} render={() => <Error404/>}/>
            <Redirect from={"*"} to={PATH.ERROR}/>
        </Switch>
    )
}