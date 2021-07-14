import React, {useEffect} from 'react';
import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "../bll/auth-reducer";
import {Header} from "../components/Header/Header";
import {Routes} from '../components/Routes/Routes';
import {AppRootStateType} from "../bll/store";
import {AppStatusType} from "../bll/app-reducer";
import {Preloader} from "../components/Preloader/Preloader";
import {getTokenFromLocalStorageTC} from "../utils/localStorageHelpers";

export const App: React.FC = React.memo(() => {

        const status = useSelector<AppRootStateType, AppStatusType>(state => state.app.status)
        const token = useSelector<AppRootStateType, string | null>(state => state.auth.token)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(getTokenFromLocalStorageTC())
            if (token) {
                dispatch(authMeTC())
            }
        }, [token])

        return (
            <div className={styles.app}>
                <Header/>
                {status === "loading" ? <Preloader/> : <Routes/>}
            </div>
        )
    }
)
