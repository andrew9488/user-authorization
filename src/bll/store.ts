import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer, AppReducerActionsType} from "./app-reducer";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type ActionsType = AppReducerActionsType | ProfileReducerActionsType | AuthReducerActionsType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>