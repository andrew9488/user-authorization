import {appReducer, InitialStateType, setAppStatusAC, showAppErrorAC} from "./app-reducer";

let initialState: InitialStateType
beforeEach(() => {
    initialState = {
        status: "idle",
        error: null
    }
})

test("status has to changed", () => {

    const failedStatus = "failed"
    const endState = appReducer(initialState, setAppStatusAC(failedStatus))
    expect(endState.status).toBe(failedStatus)
})

test("error has to showed", () => {

    const error = "Network error"
    const endState = appReducer(initialState, showAppErrorAC(error))
    expect(endState.error).toBe(error)
})