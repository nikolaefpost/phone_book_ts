import {UserState, UserActionTypes, UserAction, IUser} from '../../types/userTypes'

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}


export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {loading: true, error: null, user: {}}
        case UserActionTypes.FETCH_USER_SUCCESS:
            const {displayName, email, photoURL} = action.payload.user
            return {
                loading: false,
                error: null,
                user: {
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                    password: '',
                    isGoogle: true
                }
            }
        case UserActionTypes.FETCH_USER_ERROR:
            return {loading: true, error: action.payload, user: {}}
        case UserActionTypes.DELETE_USER:
            return {loading: false, error: null, user: null}
        case UserActionTypes.INPUT_USER:
            return {loading: false, error: null, user: action.payload}
        case UserActionTypes.LOAD_USER_LOGO:
            return {loading: false, error: null, user: {...state.user ,photoURL: action.payload}}
        default:
            return state
    }
}