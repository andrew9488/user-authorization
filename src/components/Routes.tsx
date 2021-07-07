import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "../features/Login/Login";

export const PATH = {
    PROFILE: "/",
    LOGIN: "/login",
    ERROR: "/404"
}


export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={PATH.PROFILE} render={() => <h2>profile</h2>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.ERROR} render={() => <h2>error</h2>}/>
            <Redirect from={"*"} to={PATH.ERROR}/>
        </Switch>
    )
}