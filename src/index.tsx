import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './store';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth";


firebase.initializeApp({
    apiKey: "AIzaSyDYLICeKiusf2Ecbi-BFqwY_8VOG7_rhwM",
    authDomain: "phone-book-ts.firebaseapp.com",
    projectId: "phone-book-ts",
    storageBucket: "phone-book-ts.appspot.com",
    messagingSenderId: "47532916531",
    appId: "1:47532916531:web:cc19ac93f2c51dc09fc846",
    measurementId: "G-XC2LEVJSN3"
})

// export const Context = createContext<any>(null);
//
// const auth = firebase.auth();
// const firestore = firebase.firestore();


ReactDOM.render(
    <Provider store={store}>
        {/*<Context.Provider value={{*/}
        {/*    firebase,*/}
        {/*    auth,*/}
        {/*    firestore*/}
        {/*}}>*/}
            <App/>
        {/*</Context.Provider>*/}
    </Provider>,
    document.getElementById('root')
);

