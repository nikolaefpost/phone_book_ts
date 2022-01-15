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
            return {loading: true, error: action.payload, contacts: []}
        case ContactActionTypes.DELETE_CONTACTS:
            return {loading: false, error: null, contacts: state.contacts.filter(item=>item.id !==action.payload)}
        default:
            return  state
    }
}