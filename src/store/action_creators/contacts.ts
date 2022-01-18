import {Dispatch} from "redux"
import {ContactAction, ContactActionTypes, IUser} from "../../types/types"
import axios from "axios";

export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            dispatch({type: ContactActionTypes.FETCH_CONTACTS})
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            dispatch({type: ContactActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data})
        } catch (e){
            dispatch({
                type: ContactActionTypes.FETCH_CONTACTS_ERROR,
                payload: 'Contacts not loaded'
            })
        }

    }
}