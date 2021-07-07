import {authMe, login} from "../api/api";
import {setAppStatusAC} from "./app-reducer";

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

const loginTC = (id: number, email: string, password: string) => (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    login(id, email, password)
        .then(response => {
            const {accessToken} = response.data
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
            dispatch(setAccessTokenAC(accessToken))
        })
        .catch(error => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC("failed"))
            console.log(error)
        })
}

const authMeTC = (token: string) => (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    authMe(token)
        .then(response => {
            const {name, email} = response.data
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setIsLoggedInAC(true))
        })
        .catch(error => {
            dispatch(setAppStatusAC("failed"))
            dispatch(setIsLoggedInAC(false))
            console.log(error)
        })
}