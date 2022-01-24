import React, {FC, useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import FormAddContact from "./FormAddContact";
import { IUser} from "../types/types";
import {useDispatch} from "react-redux";
interface ModalProps{
    id?: number
    fname?: string
    username?: string
    phone?: number|string
    img?: string|null
    dispatch_type: string
    action: string
}
export  const ModalAdd: FC<ModalProps> = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(props.fname || '')
    const [surname, setSurname] = useState<string>(props.username ||'')
    const [number, setNumber] = useState<number|string>(props.phone||0)
    const [foto, setFoto] = useState<string|null>(null)
    console.log(foto)
    const [open, setOpen] = useState<boolean>(false)

    class User {

        private name: string;
        age: number;
        constructor(userName: typeof name, userAge: number) {

            this.name = userName;
            this.age = userAge;
        }
        print(name: string){
            this.name = name

        }
    }
    class UserE extends User{

    }

    let tom = new UserE("Tom", 34);
    let pr = tom.print.bind(tom)
    pr('Ed')

    console.log(tom);

    const addContact = (contact:IUser): void=>{

        dispatch({type: props.dispatch_type, payload: contact})
        setOpen(false)
    }
    return (
        <div className='d-flex justify-content-end'>
            <div
                onClick={() => setOpen(true)}

            >
                {props.children}
            </div>
            <Modal
                centered
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
                                id: props.id? props.id : (new Date()).getTime(),
                                name: name,
                                username: surname,
                                phone: number,
                                img: foto?  foto: props.img
                            })
                        }}
                    >
                        {props.action}
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

