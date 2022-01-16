import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from "../components/UserList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {ModalAdd} from '../components/Modal'

const Contacts = () => {

    const contacts = useTypedSelector(state => state.contact)

    return (<>
        <div className='container mt-2 p-5 h-100' style={{height: '100vh'}}>
            <UserList contacts={contacts.contacts} />
            <ModalAdd/>
        </div>

        </>
    );
};

export default Contacts;