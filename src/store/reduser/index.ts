import {combineReducers} from "redux";
import { ContactReducer } from "./contactReducer";
import {UserReducer} from "./userReducer";


export const rootReducers =combineReducers({
    contact: ContactReducer,
    user: UserReducer
})

export type RootState = ReturnType<typeof rootReducers>