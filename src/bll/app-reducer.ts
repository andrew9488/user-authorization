export type AppReducerActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof showAppErrorAC>
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: "idle" as AppStatusType,
    error: null as string | null,
}
export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "APP-REDUCER/SET-APP-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "APP-REDUCER/SHOW-APP-ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

//action creators
export const setAppStatusAC = (status: AppStatusType) =>
    ({type: "APP-REDUCER/SET-APP-STATUS", status} as const)
export const showAppErrorAC = (error: string | null) =>
    ({type: "APP-REDUCER/SHOW-APP-ERROR", error} as const)