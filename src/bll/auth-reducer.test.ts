import {authReducer, InitialStateType, setAccessTokenAC, setIsLoggedInAC} from "./auth-reducer";

let initialStat: InitialStateType

beforeEach(() => {
    initialStat = {
        token: null as string | null,
        isLoggedIn: false
    }
})

test("token has to set", () => {

    const token = "lala43blabla56hello"
    const endState = authReducer(initialStat, setAccessTokenAC(token))
    expect(endState.token).toBe(token)
})

test("user is logged in", () => {

    const isLoggedIn = true
    const endState = authReducer(initialStat, setIsLoggedInAC(isLoggedIn))
    expect(endState.isLoggedIn).toBe(isLoggedIn)
})