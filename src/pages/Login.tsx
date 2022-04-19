import React, {FC, useContext, useState} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';

import {useDispatch} from "react-redux";
import styles from './page.module.scss'
import {useActionsUser, useInput} from "../hooks";
import {UserActionTypes} from "../types/userTypes";

const Login: FC = () => {

    const name = useInput("");
    const email = useInput("");
    const password1 = useInput("");
    const password2 = useInput("");
    const [saveMe, setSaveMe] = useState(true)

    const [isRegister, setIsRegister] = useState(false)
    const dispatch = useDispatch()
    const {fetchUser} = useActionsUser()

    const onLogin = async () => {
        fetchUser()
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user_ = {
            displayName: name.value,
            email: email.value,
            password: password1.value,
            photoURL: null,
            isGoogle: false
        }
        if (isRegister && password1.value === password2.value ) {
            dispatch({type: UserActionTypes.INPUT_USER, payload: user_})
            saveMe && localStorage.setItem("registeredUser", JSON.stringify(user_));
        }else{
            const registeredUser = JSON.parse(localStorage.getItem("registeredUser") || "");
            (registeredUser.email === email?.value && registeredUser?.password === password1.value) &&
            dispatch({type: UserActionTypes.INPUT_USER, payload: registeredUser})
        }
        console.log({name: name?.value, email: email.value, password: password1.value, photoURL: null, isGoogle: false});
    };

    return (
        <Container>
            <div className={styles.wrapper}>
                <h2>{isRegister ? "REGISTRATION" : "LOGIN"}</h2>
                <Form onSubmit={handleSubmit}>
                    {!!isRegister && <FormGroup className='text-start'>
                        <Label for="name" className='ms-1'>Full name</Label>
                        <Input type="text" {...name} name="name" id="name" placeholder="enter your full name"/>
                    </FormGroup>}

                    <FormGroup className='text-start'>
                        <Label for="email" className='ms-1'>Email</Label>
                        <Input type="email" {...email} name="email" id="email" placeholder="enter your email"/>
                    </FormGroup>
                    <FormGroup className='text-start'>
                        <Label for="password1" className='ms-1'>Password</Label>
                        <Input type="password" {...password1} name="password1" id="password1"
                               placeholder="enter your password "/>
                    </FormGroup>
                    {!!isRegister && <FormGroup className='text-start'>
                        <Input type="password" {...password2} name="password2" id="password2"
                               placeholder="enter the password again"/>
                    </FormGroup>}
                    {isRegister && <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={saveMe} onChange={() => setSaveMe((pre) => !pre)}/>{' '}
                            Save me
                        </Label>
                    </FormGroup>}
                    <Button>{isRegister ? "Register" : "Login"}</Button>

                </Form>
                <span
                    className='text-danger mb-2 text-decoration-underline'
                    style={{cursor: "pointer"}}
                    onClick={() => setIsRegister((pre) => !pre)}
                >{isRegister ? "Login" : "Register"}</span>
                <h6 className='mt-2'>OR</h6>
                <Button outline color="primary" onClick={onLogin}>Login from Google</Button>
            </div>
        </Container>
    );
}

export default Login;