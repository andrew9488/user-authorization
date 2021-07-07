import {Dispatch} from "redux";
import {setAccessTokenAC} from "../bll/auth-reducer";

export const getTokenFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let accessToken = localStorage.getItem("access_token")
    if (accessToken) {
        let token = JSON.parse(accessToken)
        dispatch(setAccessTokenAC(token))
    }
}

