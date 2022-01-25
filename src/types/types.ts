
export interface IUser{
    id: number;
    name: string;
    username: string;
    phone: string| number;
    img?: string|null;
}

export interface ContactState {
    contacts: IUser[];
    loading: boolean;
    error: null | string;
}

export enum ContactActionTypes {
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
    DELETE_CONTACTS = 'DELETE_CONTACTS',
    ADD_CONTACTS = 'ADD_CONTACTS',
    EDIT_CONTACTS= 'EDIT_CONTACTS'
}

export interface FetchContactAction {
    type: ContactActionTypes.FETCH_CONTACTS;
}
export interface FetchContactSuccessAction {
    type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
    payload: IUser[];
}
export interface FetchContactErrorAction {
    type: ContactActionTypes.FETCH_CONTACTS_ERROR
    payload: string;
}
export interface DeleteContactAction {
    type: ContactActionTypes.DELETE_CONTACTS
    payload: number;
}
export interface AddContactAction {
    type: ContactActionTypes.ADD_CONTACTS
    payload :IUser;
}
export interface EditContactAction {
    type: ContactActionTypes.EDIT_CONTACTS
    payload :IUser;
}
export type ContactAction = FetchContactAction | FetchContactSuccessAction | FetchContactErrorAction |
    DeleteContactAction | AddContactAction | EditContactAction;