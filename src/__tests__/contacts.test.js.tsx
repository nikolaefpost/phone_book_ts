import {ContactAction, ContactActionTypes, ContactState, IUser} from "../types/types"
import {ContactReducer} from "../store/reduser/contactReducer";




describe('Reducer test', ()=>{
    let state: ContactState;
    beforeEach(()=>{
         state = {
            contacts: [
                {
                    id: 1,
                    name: 'Artem',
                    username: 'Le',
                    phone: 12345678
                },
                {
                    id: 2,
                    name: 'Ed',
                    username: 'Le',
                    phone: 87654321
                }
            ],
            loading: false,
            error: null
        }
    })
    it('1-FETCH_CONTACTS',()=>{
        const initialState: ContactState = {
            contacts: [],
            loading: false,
            error: null
        }
        const newState = ContactReducer(initialState, {type: ContactActionTypes.FETCH_CONTACTS})
        expect(newState.loading).toBeTruthy();
    })
    it('2-FETCH_CONTACTS_SUCCESS',()=>{
        const initialState: ContactState = {
            contacts: [],
            loading: false,
            error: null
        }
        const newState = ContactReducer(initialState, {type: ContactActionTypes.FETCH_CONTACTS_SUCCESS, payload: state.contacts})
        expect(newState).toStrictEqual(state);
    })
    it('3-FETCH_CONTACTS_ERROR',()=>{
        const initialState: ContactState = {
            contacts: [],
            loading: false,
            error: null
        }
        const newState = ContactReducer(initialState, {type: ContactActionTypes.FETCH_CONTACTS_ERROR, payload: 'Contacts not loaded'})
        expect(newState.error).toStrictEqual('Contacts not loaded');
    })
    it('4-DELETE_CONTACTS', () => {

        const newState = ContactReducer(state, {type: ContactActionTypes.DELETE_CONTACTS, payload: 2})
        const ExpState1: ContactState = {
            contacts: [
                {
                    id: 1,
                    name: 'Artem',
                    username: 'Le',
                    phone: 12345678
                }
            ],
            loading: false,
            error: null
        }
        expect(newState).toStrictEqual(ExpState1);
    })
    it('5-ADD_CONTACTS', () => {
        const addUser: IUser = {
            id: 3,
            name: 'Vika',
            username: 'Le',
            phone: 12312312
        }
       const ExpState2: ContactState = {
            contacts: [
                {
                    id: 1,
                    name: 'Artem',
                    username: 'Le',
                    phone: 12345678
                },
                {
                    id: 2,
                    name: 'Ed',
                    username: 'Le',
                    phone: 87654321
                },
                {
                    id: 3,
                    name: 'Vika',
                    username: 'Le',
                    phone: 12312312
                }
            ],
            loading: false,
            error: null
        }
        const newState = ContactReducer(state, {type: ContactActionTypes.ADD_CONTACTS, payload: addUser})

        expect(newState).toStrictEqual(ExpState2);
    })
    it('6-EDIT_CONTACTS', () => {
        const addUser: IUser = {
            id: 1,
            name: 'Vika',
            username: 'Le',
            phone: 12312312
        }
        const ExpState3: ContactState = {
            contacts: [
                {
                    id: 1,
                    name: 'Vika',
                    username: 'Le',
                    phone: 12312312
                },
                {
                    id: 2,
                    name: 'Ed',
                    username: 'Le',
                    phone: 87654321
                },
            ],
            loading: false,
            error: null
        }
        const newState = ContactReducer(state, {type: ContactActionTypes.EDIT_CONTACTS, payload: addUser})

        expect(newState).toStrictEqual(ExpState3);
    })


})

// npm run test:watch