import {authMe, login} from "../api/api";
import {setAppStatusAC, showAppErrorAC} from "./app-reducer";
import {setUserDataAC} from "./profile-reducer";
import {AppThunkType} from "./store";

export type AuthReducerActionsType = ReturnType<typeof setAccessTokenAC> | ReturnType<typeof setIsLoggedInAC>

const initialState = {
    token: null as string | null,
    isLoggedIn: false
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/SET-ACCESS-TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "AUTH-REDUCER/SET-IS-LOGGED-IN":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}

export const setAccessTokenAC = (token: string) =>
    ({type: "AUTH-REDUCER/SET-ACCESS-TOKEN", token} as const)
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: "AUTH-REDUCER/SET-IS-LOGGED-IN", isLoggedIn: isLoggedIn} as const)

export const loginTC = (id: number, email: string, password: string): AppThunkType => dispatch => {
    dispatch(setAppStatusAC("loading"))
    login(id, email, password)
        .then(response => {
            const {accessToken} = response.data
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            localStorage.setItem("access_token", accessToken)
        })
        .catch(error => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC("failed"))
            dispatch(showAppErrorAC(error))

        })
}

const authMeTC = (token: string): AppThunkType => dispatch => {
    dispatch(setAppStatusAC("loading"))
    authMe(token)
        .then(response => {
            const {name, email} = response.data
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            dispatch(setUserDataAC(name, email))
        })
        .catch(error => {
            dispatch(setAppStatusAC("failed"))
            dispatch(setIsLoggedInAC(false))
            dispatch(showAppErrorAC(error))
        })
}