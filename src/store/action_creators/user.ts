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

export const loadUserLogo = (foto:Blob) => {
    return async (dispatch: Dispatch<UserAction>) => {
        let fReader = new FileReader();
        fReader.readAsDataURL(foto);
        fReader.onerror = function (event) {
            alert("Failed to read file!\n\n" + fReader.error);
        };
        fReader.onloadend = function (event) {
            if (event.target == null) {
                throw new Error("Error readAsDataURL");
            }
            dispatch({type: UserActionTypes.LOAD_USER_LOGO, payload: event.target.result as string })
        }

    }
}

// export const loadUserLogo = () = {
//     return async (dispatch: Dispatch<UserAction>) => {
//
//         let fReader = new FileReader();
//         fReader.readAsDataURL(e.currentTarget.files[0]);
//         fReader.onerror = function (event) {
//             alert("Failed to read file!\n\n" + fReader.error);
//         };
//         fReader.onloadend = function (event) {
//             if (event.target == null) {
//                 throw new Error("Error readAsDataURL");
//             }
//             setFoto(event.target.result as string | null)
//         }
//     }
// }