// export interface IUser{
//     id: number;
//     name: string;
//     username: string;
//     phone: string| number;
//     img?: string|null;
// }

export interface UserState {
    user: any
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    DELETE_USER = "DELETE_USER",
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: any;
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string;
}

export interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER
    payload: object;
}



export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | DeleteUserAction;