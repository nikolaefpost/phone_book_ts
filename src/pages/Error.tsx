import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Error: React.FC = () => {
    const storeContacts = useTypedSelector(state => state.contact)
    return (
        <div className='w-100 h-100 flex-column bg-secondary d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>ERROR 404</h1>
            <h2 className='text-light '>{storeContacts.error}</h2>
        </div>
    );
};

export default Error;