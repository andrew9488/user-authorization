import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

export const PATH = {
    LOGIN: "/",
    PROFILE: "/profile",
    ERROR: "/404"
}


export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={PATH.LOGIN} render={() => <h2>login</h2>}/>
            <Route path={PATH.PROFILE} render={() => <h2>profile</h2>}/>
            <Route path={PATH.ERROR} render={() => <h2>error</h2>}/>
            <Redirect from={"*"} to={PATH.ERROR}/>
        </Switch>
    )
}