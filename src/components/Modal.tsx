import React, {FC, useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FormAddContact from "./FormAddContact";
import {ContactActionTypes, IUser} from "../types/types";
import {useDispatch} from "react-redux";
interface ModalProps{
    id?: number
    fname?: string
    username?: string
    phone?: number|''
}
export  const ModalAdd: FC<ModalProps> = ({id, fname, username, phone}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(fname || '')
    const [surname, setSurname] = useState<string>(username ||'')
    const [number, setNumber] = useState<number|''>(phone||'')
    const [foto, setFoto] = useState<string|null|ArrayBuffer>(null)
    const [open, setOpen] = useState<boolean>(false)
    // console.log(name, surname, number, foto)
    const addContact = (contact:IUser): void=>{

        dispatch({type: ContactActionTypes.ADD_CONTACTS, payload: contact})
        setOpen(false)
    }
    return (
        <div className='d-flex justify-content-end'>
            <div
                onClick={() => setOpen(true)}

            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#0d6efd"
                     className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </div>
            <Modal
                isOpen ={open}
                toggle={() => setOpen(false)}
            >
                <ModalHeader toggle={() => setOpen(false)}>
                    Enter contact details, please.
                </ModalHeader>
                <ModalBody>
                    <FormAddContact
                        name={name}
                        setName={setName}
                        surname={surname}
                        setSurname={setSurname}
                        number={number}
                        setNumber={setNumber}
                        setFoto={setFoto}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={()=>{
                            addContact({
                                id: (new Date()).getTime(),
                                name: name,
                                username: surname,
                                phone: number,
                                img: foto
                            })
                        }}
                    >
                        Add contact
                    </Button>
                    {' '}
                    <Button onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

