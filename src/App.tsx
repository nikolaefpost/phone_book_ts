import React, {useContext} from 'react';
import AppRouter from './components/AppRouter';
import NavBar from "./components/NavBar";
import {BrowserRouter} from 'react-router-dom';
// import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Spinner} from "reactstrap";
import {useTypedSelector} from "./hooks/useTypedSelector";


function App() {
    const storeUser = useTypedSelector(state => state.user)
    return (
        <BrowserRouter>
            <div className='h-100 bg-light pt-5 text-center'>
                {storeUser.user && <NavBar/>}
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
// npm i @types/react-redux redux react-redux redux-thunk axios
