import React, {FC, useContext, useState} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
// import {Context} from '..';
import firebase from "firebase/compat/app";
import {useDispatch} from "react-redux";
import styles from './page.module.scss'
import {fetchUser} from "../store/action_creators/user";
import {useInput} from "../hooks";

const Login: FC = () => {

    const name = useInput("");
    const email = useInput("");
    const password = useInput("");
    const [saveMe, setSaveMe] = useState(true)

    const [isRegister, setIsRegister] = useState(false)
    const dispatch = useDispatch()

    const onLogin = async () => {
        dispatch(fetchUser())
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ name: name?.value, email: email.value, password: password.value, photoURL: null, isGoogle: false });
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
                        <Label for="password" className='ms-1'>Password</Label>
                        <Input type="password" {...password} name="password" id="password" placeholder="enter your password "/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" checked={saveMe} onChange={()=>setSaveMe((pre)=>!pre)}/>{' '}
                            Save me
                        </Label>
                    </FormGroup>
                    <Button>{isRegister ? "Register" : "Login"}</Button>

                </Form>
                <span
                    className='text-danger mb-2 text-decoration-underline'
                    style={{cursor: "pointer"}}
                    onClick={()=>setIsRegister((pre)=>!pre)}
                >{isRegister ? "Login":"Register"}</span>
                <h6 className='mt-2'>OR</h6>
                <Button outline color="primary" onClick={onLogin}>Login from Google</Button>
            </div>
        </Container>
    );
}

export default Login;