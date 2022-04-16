import {UserState, UserActionTypes, UserAction} from  '../../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}


export const UserReducer = (state = initialState, action: UserAction): UserState =>{
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: {}}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {loading: false, error: null, user: action.payload.user}
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: true, error: action.payload, user: {}}
        case UserActionTypes.DELETE_USER:
            return {loading: false, error: null, user: null}
        default:
            return state
    }
}