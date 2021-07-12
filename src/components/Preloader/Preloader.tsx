import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {useStyles} from "./materialUIstyles";

export const Preloader: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress style={{width: "100px", height: "100px"}}/>
        </div>
    )
}