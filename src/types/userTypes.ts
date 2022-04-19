export interface IUser{
    displayName: string;
    email: string;
    password: string| number;
    photoURL?: string|null;
    isGoogle: boolean
}

export interface UserState {
    user: any
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    INPUT_USER = "INPUT_USER",
    DELETE_USER = "DELETE_USER",
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    LOAD_USER_LOGO = 'LOAD_USER_LOGO'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: any;
}

export interface InputUserAction {
    type: UserActionTypes.INPUT_USER;
    payload: IUser;
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string;
}

export interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER
}

export interface LoadUserLogoAction {
    type: UserActionTypes.LOAD_USER_LOGO
    payload: string;
}



export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | DeleteUserAction
    | InputUserAction | LoadUserLogoAction;