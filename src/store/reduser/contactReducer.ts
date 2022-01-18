import {ContactAction, ContactActionTypes, ContactState} from "../../types/types"

const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null
}

export const ContactReducer = (state=initialState, action: ContactAction):ContactState  => {
    switch (action.type){
        case ContactActionTypes.FETCH_CONTACTS:
            return {loading: true, error: null, contacts: []}
        case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
            return {loading: false, error: null, contacts: action.payload}
        case ContactActionTypes.FETCH_CONTACTS_ERROR:
            return {loading: false, error: action.payload, contacts: []}
        case ContactActionTypes.DELETE_CONTACTS:
            return {loading: false, error: null, contacts: state.contacts.filter(item=>item.id !==action.payload)}
        case ContactActionTypes.ADD_CONTACTS:
            return {loading: false, error: null, contacts: [...state.contacts, action.payload]}
        case ContactActionTypes.EDIT_CONTACTS:
            return {loading: false, error: null, contacts: [...state.contacts.map(item => item.id !== action.payload.id ? item : action.payload)]}
        default:
            return  state
    }
}