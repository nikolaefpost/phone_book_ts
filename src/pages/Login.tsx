import React, {FC, useContext} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
// import {Context} from '..';
import firebase from "firebase/compat/app";
import {useDispatch} from "react-redux";
import styles from './page.module.scss'
import {fetchUser} from "../store/action_creators/user";

const Login: FC = () => {
    const dispatch = useDispatch()

    const onLogin = async () => {
        dispatch(fetchUser())
    }

    return (
        <Container>
            <div className={styles.wrapper}>
                <h2>LOGIN</h2>
                <Form>
                    <FormGroup className='text-start'>
                        <Label for="exampleEmail" className='ms-1'>Email</Label>
                        <Input type="email" name="email" id="email" placeholder="enter your email"/>
                    </FormGroup>
                    <FormGroup className='text-start'>
                        <Label for="examplePassword" className='ms-1'>Password</Label>
                        <Input type="password" name="password" id="password" placeholder="enter your password "/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox"/>{' '}
                            Save me
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <h4>OR</h4>
                <Button outline color="primary" onClick={onLogin}>Login from Google</Button>
            </div>
        </Container>
    );
}

export default Login;