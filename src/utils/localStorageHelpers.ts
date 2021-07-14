import {Dispatch} from "redux";
import {setAccessTokenAC} from "../bll/auth-reducer";

export const setTokenToLocalStorageTC = (token: string) => (dispatch: Dispatch) => {
    if (token) localStorage.setItem("access_token", JSON.stringify(token))
}

export const getTokenFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let accessToken = localStorage.getItem("access_token")
    if (accessToken) {
        let token = JSON.parse(accessToken)
        dispatch(setAccessTokenAC(token))
    }
}

export const removeTokenFromLocalStorageTC = () => (dispatch: Dispatch) => {
    localStorage.removeItem("access_token")
}

