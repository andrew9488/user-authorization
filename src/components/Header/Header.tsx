import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from "./materialUIstyles";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {logoutTC} from "../../bll/auth-reducer";
import {ErrorSnackbar} from "../ErrorSnackbar/ErrorSnackbar";

export const Header: React.FC = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const classes = useStyles()

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <ErrorSnackbar/>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        User Authorization
                    </Typography>
                    <Button color="inherit" onClick={logout}>{isLoggedIn ? "Sign out" : ""}</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
})