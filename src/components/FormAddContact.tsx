import React, {FC, useState} from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
interface FormProps{
    name: string
    setName: (name: string) => void
    surname: string
    setSurname: (surname: string) => void
    number: number|string
    setNumber: (number: number|'') => void
    setFoto: (foto: string|null) => void

}

const FormAddContact: FC<FormProps> = ({
                                           name,
                                           setName,
                                           surname,
                                           setSurname,
                                           number,
                                           setNumber,
                                           setFoto,
}) => {
    const [novalide, setNovalid] = useState<boolean>(false)

    const onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
        setName( e.currentTarget.value );
    };
    const onChangeSurname = (e: React.FormEvent<HTMLInputElement>): void => {
        setSurname( e.currentTarget.value );
    };
    const onChangePhone = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(Number(e.currentTarget.value))
       if (Number(e.currentTarget.value)) {
           setNumber(Number(e.currentTarget.value))
           setNovalid(false)
       }else setNovalid(true);
    };
    const onChangeImg = (e: React.FormEvent<HTMLInputElement>): void => {
        if ( e.currentTarget.files == null ) {
            throw new Error("Error finding e.target.files");
        }
        let fReader = new FileReader();
        fReader.readAsDataURL(e.currentTarget.files[0]);
        fReader.onerror = function(event) {
            alert("Failed to read file!\n\n" + fReader.error);
        };
        fReader.onloadend = function(event){
            // setFoto(event.target!.result as string | null)
            if ( event.target == null ) {
                throw new Error("Error readAsDataURL");
            }
            setFoto(event.target.result as string | null)
        }
    };
    return (
        <Form>
            <FormGroup>
                <Label for="name">
                    Name
                </Label>
                <Input
                    placeholder="Vasya"
                    type="text"
                    value={name}
                    onChange={onChangeName}
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
                    Phone number
                </Label>
                <Input
                    placeholder="3809312345678"
                    type="tel"
                    invalid={novalide}
                    value={number}
                    onChange={onChangePhone}
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
        </Form>
    );
};

export default FormAddContact;