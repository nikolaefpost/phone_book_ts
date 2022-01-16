// export interface IGeo{
//     lat: string;
//     lng: string;
// }
//
// export interface IAddress{
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: IGeo;
// }
//
// export interface ICompany{
//     name: string;
//     catchPhrase: string;
//     bs: string
// }

export interface IUser{
    id: number;
    name: string;
    username: string;
    // email: string;
    // address: IAddress
    phone: string| number;
    img?: string|null|ArrayBuffer;
    // website: string;
    // company: ICompany
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
    ADD_CONTACTS = 'ADD_CONTACTS'
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
export type ContactAction = FetchContactAction | FetchContactSuccessAction | FetchContactErrorAction |
    DeleteContactAction | AddContactAction;