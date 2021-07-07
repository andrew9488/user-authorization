export type ProfileReducerActionsType = ReturnType<typeof setUserDataAC>

const initialState = {
    userName: null as string | null,
    userEmail: null as string | null
}
export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "PROFILE-REDUCER/SET-USER-DATA":
            return {
                ...state,
                userName: action.name,
                userEmail: action.email
            }

        default:
            return state
    }
}

//action creators
export const setUserDataAC = (name: string, email: string) =>
    ({type: "PROFILE-REDUCER/SET-USER-DATA", name, email} as const)
