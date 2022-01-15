import {combineReducers} from "redux";
import { ContactReducer } from "./contactReduser";


export const rootReducers =combineReducers({
    contact: ContactReducer
})

export type RootState = ReturnType<typeof rootReducers>