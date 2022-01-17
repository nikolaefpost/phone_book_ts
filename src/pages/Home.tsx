import React, {FC} from 'react';
import logo from '../images/Home_page.png'

import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import {CONTACTS_ROUTE} from "../utils/consts";

export enum CardVariant{
    outlined = 'outlined',
    primary = 'primary',
}

interface HomeProps {
    width?: string;
    height?: string
    // children?: React.ReactChild | React.ReactNode
    variant?: CardVariant
    onClick?: (word: string)=>void
}

const Home: React.FC = () => {
    return (
        <div className='w-100 h-100 bg-secondary d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>Home page</h1>
        </div>
    );
};

export default Home;