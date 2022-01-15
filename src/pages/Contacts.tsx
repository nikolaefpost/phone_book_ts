import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from "../components/UserList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const Contacts = () => {

    const contacts = useTypedSelector(state => state.contact)
    console.log(contacts)
    const {fetchContacts} = useActions()

    // useEffect(()=>{
    //     fetchContacts()
    // },[])

    const loadContact = () => {
        fetchContacts()
    }
    if (contacts.loading) {
        return <h1>Loading in progress...</h1>
    }
    if (contacts.error) {
        return <h1>{contacts.error}</h1>
    }
    return (
        <div>
            <button onClick={loadContact}>Load Contact</button>
           <UserList contacts={contacts.contacts} />
        </div>
    );
};

export default Contacts;