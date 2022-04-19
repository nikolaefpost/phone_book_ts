import React, {FC, useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {useDispatch} from "react-redux";
import {IUser} from "../types/types";

interface FormProps {
    id?: number
    contact_name?: string
    contact_username?: string
    contact_phone?: number | string
    contact_img?: string | null
    dispatch_type: string
    action: string

}

const FormAddContact: FC<FormProps> = ({
                                           id,
                                           contact_name,
                                           contact_username,
                                           contact_phone,
                                           contact_img,
                                           dispatch_type,
                                           action
                                       }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(contact_name || '')
    const [surname, setSurname] = useState<string>(contact_username || '')
    const [number, setNumber] = useState<number | string>(contact_phone || '')
    const [foto, setFoto] = useState<string | null>(null)
    const [open, setOpen] = useState<boolean>(false)


    const onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
        setName(e.currentTarget.value);
    };
    const onChangeSurname = (e: React.FormEvent<HTMLInputElement>): void => {
        setSurname(e.currentTarget.value);
    };
    const onChangePhone = (e: React.FormEvent<HTMLInputElement>): void => {
        setNumber(e.currentTarget.value)
    };
    const onChangeImg = (e: React.FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.files == null) {
            throw new Error("Error finding e.target.files");
        }
        let fReader = new FileReader();
        fReader.readAsDataURL(e.currentTarget.files[0]);
        fReader.onerror = function (event) {
            alert("Failed to read file!\n\n" + fReader.error);
        };
        fReader.onloadend = function (event) {
            if (event.target == null) {
                throw new Error("Error readAsDataURL");
            }
            setFoto(event.target.result as string | null)
        }
    };

    const addContact = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const contact: IUser = {
            id: id ? id : (new Date()).getTime(),
            name: name,
            username: surname,
            phone: number,
            img: foto ? foto : contact_img
        }
        dispatch({type: dispatch_type, payload: contact})
        setOpen(false)
    }
    return (
        <Form onSubmit={(e) => {
            addContact(e)
        }}>
            <FormGroup>
                <Label for="name">
                    Name <span className='text-danger'>*</span>
                </Label>
                <Input
                    placeholder="Vasya"
                    type="text"
                    value={name}
                    onChange={onChangeName}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="surname">
                    Surname
                </Label>
                <Input
                    placeholder="Bublikov"
                    type="text"
                    value={surname}
                    onChange={onChangeSurname}
                />
            </FormGroup>
            <FormGroup>
                <Label for="number">
                    Phone number format (XXX) XXX-XX-XX <span className='text-danger'>*</span>
                </Label>
                <Input
                    placeholder="(XXX) XXX-XX-XX"
                    type="tel"
                    value={number}
                    onChange={onChangePhone}
                    pattern="\(\d{3}\) \d{3}-\d{2}-\d{2}"
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="file">
                    Сontact picture
                </Label>
                <Input
                    type="file"
                    onChange={onChangeImg}
                />
            </FormGroup>
            <div className='d-flex justify-content-end mt-4 mb-2'>
                <Button
                    color="primary"
                    type='submit'
                    className='me-2'
                >
                    {action}
                </Button>
                <Button onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </div>

        </Form>
    );
};

export default FormAddContact;
