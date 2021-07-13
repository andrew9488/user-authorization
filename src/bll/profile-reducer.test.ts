import {InitialStateType, profileReducer, setUserDataAC} from "./profile-reducer"


let initialState: InitialStateType
beforeEach(() => {
    initialState = {
        userName: null as string | null,
        userEmail: null as string | null
    }
})

test("user data has to set", () => {

    const email = "hire_me@gmail.com"
    const name = "ReallyCoolBoy"
    const endState = profileReducer(initialState, setUserDataAC(name, email))
    expect(endState.userEmail).toBe(email)
    expect(endState.userName).toBe(name)
})