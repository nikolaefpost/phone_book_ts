import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useActionsUser} from "../hooks";

interface FormAddLogo{
    dispatch_type: string
    action: string
}

const FormAddLogo = ({dispatch_type, action}: FormAddLogo) => {

    const [foto, setFoto] = useState<Blob | null>(null)
    const { loadUserLogo} = useActionsUser()

    const addLogo = (foto: Blob) => {
        if (foto === null) {
            throw new Error("Error finding e.target.files");
        }else {
            console.log(foto)
            loadUserLogo(foto)
        }
    }

    const onChangeImg = (e: React.FormEvent<HTMLInputElement>): void => {
        if(e.currentTarget.files === null) {
            throw new Error("Error finding e.target.files");
        }else {
            setFoto(e.currentTarget.files[0])
        }

    };

    return (
        <Form onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            addLogo(foto as Blob)
        }}>

            <FormGroup>
                <Label for="file">
                    Сontact picture
                </Label>
                <Input
                    type="file"
                    onChange={onChangeImg}
                />
            </FormGroup>
            <div className='d-flex justify-content-center mt-4 mb-2 '>
                <Button
                    color="primary"
                    type='submit'
                    className='me-2'
                >
                    {action}
                </Button>
            </div>

        </Form>
    );
};

export default FormAddLogo;