import {authMe, login, logout} from "../api/api";
import {setAppStatusAC, showAppErrorAC} from "./app-reducer";
import {setUserDataAC} from "./profile-reducer";
import {AppRootStateType, AppThunkType} from "./store";
import {
    getTokenFromLocalStorageTC,
    removeTokenFromLocalStorageTC,
    setTokenToLocalStorageTC
} from "../utils/localStorageHelpers";

export type AuthReducerActionsType = ReturnType<typeof setAccessTokenAC> | ReturnType<typeof setIsLoggedInAC>

const initialState = {
    token: null as string | null,
    isLoggedIn: false
}

export type InitialStateType = typeof initialState

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

//action creators
export const setAccessTokenAC = (token: string) =>
    ({type: "AUTH-REDUCER/SET-ACCESS-TOKEN", token} as const)
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({type: "AUTH-REDUCER/SET-IS-LOGGED-IN", isLoggedIn: isLoggedIn} as const)

//thunk creators
export const loginTC = (email: string, password: string): AppThunkType => dispatch => {
    dispatch(setAppStatusAC("loading"))
    login(email, password)
        .then(response => {
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            const {accessToken} = response
            dispatch(setTokenToLocalStorageTC(accessToken))
            dispatch(authMeTC())
        })
        .catch(error => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC("failed"))
            dispatch(showAppErrorAC(error.message))
        })
}

export const logoutTC = (): AppThunkType => dispatch => {
    dispatch(setAppStatusAC("loading"))
    logout()
        .then(() => {
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(false))
            dispatch(removeTokenFromLocalStorageTC())
        })
        .catch(error => {
            dispatch(setAppStatusAC("failed"))
            dispatch(showAppErrorAC(error.message))
        })
}

export const authMeTC = (): AppThunkType => (dispatch, getState: () => AppRootStateType) => {
    dispatch(getTokenFromLocalStorageTC())
    let token = getState().auth.token
    dispatch(setAppStatusAC("loading"))
    authMe(token)
        .then(response => {
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            const {name, email} = response
            dispatch(setUserDataAC(name, email))
        })
        .catch(error => {
            dispatch(setAppStatusAC("failed"))
            dispatch(setIsLoggedInAC(false))
            dispatch(showAppErrorAC(error.message))
        })
}