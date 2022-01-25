import React, {FC} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

interface FormProps {
    name: string
    setName: (name: string) => void
    surname: string
    setSurname: (surname: string) => void
    number: number | string
    setNumber: (number: number | string) => void
    setFoto: (foto: string | null) => void
    action: string
    addContact: (e:React.FormEvent<HTMLFormElement>) => void
    setOpen: (open: boolean) => void

}

const FormAddContact: FC<FormProps> = ({
                                           name,
                                           setName,
                                           surname,
                                           setSurname,
                                           number,
                                           setNumber,
                                           setFoto,
                                           action,
                                           addContact,
                                           setOpen

                                       }) => {
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
    return (
        <Form onSubmit={(e)=> {
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
                    placeholder="Phone format (XXX) XXX-XX-XX"
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
