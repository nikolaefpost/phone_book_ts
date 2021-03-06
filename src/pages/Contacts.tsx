import React, {useEffect, useState} from 'react';
import UserList from "../components/UserList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ModalAdd} from '../components/Modal'
import {ContactActionTypes} from "../types/types";
import Search from "../components/Search";
import AddSvg from "../svg/AddSvg";
import FormAddContact from "../components/FormAddContact";

const Contacts = () => {
    const storeContacts = useTypedSelector(state => state.contact)
    const [contacts, setContacts] = useState(storeContacts.contacts)
    const [search, setSearch] = useState('')

    useEffect(()=>{
        setContacts(storeContacts.contacts)
    },[storeContacts.contacts])
    useEffect(()=>{
        if(search !== '' ) {
            setContacts(() => {
                return storeContacts.contacts.filter((item) => {
                    const l = item.name.toLowerCase()
                    return l.search(search) !== -1
                })
            })
        } else setContacts(storeContacts.contacts)
    },[search])


    return (<>
        <div className='container  p-5 p-sm-0 ' style={{marginTop: '85px'}}>

            {!storeContacts.error && <Search
                search={search}
                setSearch={setSearch}
            />}
            <UserList contacts={contacts} />
            {/*{storeContacts.error &&<ModalAdd action='Add contact' dispatch_type={ContactActionTypes.ADD_CONTACTS}><AddButton/></ModalAdd>}*/}
            <ModalAdd element={<AddSvg/>} title="Enter contact details, please.">
                <FormAddContact
                    action='Add contact'
                    dispatch_type={ContactActionTypes.ADD_CONTACTS}
                />
            </ModalAdd>
        </div>

        </>
    );
};

export default Contacts;