import {combineReducers} from "redux";
import { ContactReducer } from "./contactReducer";


export const rootReducers =combineReducers({
    contact: ContactReducer
})

export type RootState = ReturnType<typeof rootReducers>