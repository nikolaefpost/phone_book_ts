import {Dispatch} from "redux"
import {UserAction, UserActionTypes, } from "../../types/userTypes"
import axios from "axios";
import firebase from "firebase/compat/app";

export const fetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER})

            const auth_redux = firebase.auth()
            const provider = new firebase.auth.GoogleAuthProvider()
            const {user} = await auth_redux.signInWithPopup(provider)
            console.log(user)
            user && dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: user.multiFactor })
        } catch (e){
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Contacts not loaded'
            })
        }

    }
}