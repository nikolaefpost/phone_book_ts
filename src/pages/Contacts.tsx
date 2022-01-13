import React, {useEffect, useState} from 'react';
import UserList from "../components/UserList";

const Contacts = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(result=>setUsers(result))
    },[])
    return (
        <div>
           <UserList users={users} />
        </div>
    );
};

export default Contacts;