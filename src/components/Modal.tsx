import React, {FC, useState} from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FormAddContact from "./FormAddContact";
import {IUser} from "../types/types";
import {useDispatch} from "react-redux";

interface ModalProps {
    id?: number
    fname?: string
    username?: string
    phone?: number | string
    img?: string | null
    dispatch_type: string
    action: string
}

export const ModalAdd: FC<ModalProps> = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(props.fname || '')
    const [surname, setSurname] = useState<string>(props.username || '')
    const [number, setNumber] = useState<number | string>(props.phone || '')
    const [foto, setFoto] = useState<string | null>(null)
    const [open, setOpen] = useState<boolean>(false)


    const addContact = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const contact: IUser = {
            id: props.id ? props.id : (new Date()).getTime(),
            name: name,
            username: surname,
            phone: number,
            img: foto ? foto : props.img
        }
        dispatch({type: props.dispatch_type, payload: contact})
        setOpen(false)
    }
    return (
        <div className='d-flex justify-content-end'>
            <div onClick={() => setOpen(true)}>
                {props.children}
            </div>
            <Modal
                centered
                isOpen={open}
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
                        action={props.action}
                        addContact={addContact}
                        setOpen={setOpen}
                    />
                </ModalBody>
                <ModalFooter className='justify-content-start'>
                    <span className='text-danger'>*</span><span>Required fields</span>
                </ModalFooter>
            </Modal>
        </div>
    );
};

