import React, {FC, useEffect, useState} from 'react';
import {ContactActionTypes, IUser} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchContacts} from "../store/action_creators/contacts";
import {useActions} from "../hooks/useActions";
interface UserListProps{
    contacts: IUser[]
}

const UserList: FC<UserListProps> = (contacts) => {
    const dispatch = useDispatch();
    console.log(contacts)
    // const contacts = useTypedSelector(state => state.contact)
    // const {fetchContacts} = useActions()
    //
    // useEffect(()=>{
    //     fetchContacts()
    // },[])
    // if (contacts.loading) {
    //     return <h1>Loading in progress...</h1>
    // }
    // if (contacts.error) {
    //     return <h1>{contacts.error}</h1>
    // }

    return (
        <div>
            {contacts.contacts.map(user=>
                <div
                    key={user.id}
                    onClick={()=>{
                        dispatch({type: ContactActionTypes.DELETE_CONTACTS, payload: user.id})
                    }}
                >{user.name}</div>
            )

            }
        </div>
    );
};

export default UserList;




// const UserList: FC<UserListProps> = ({users}) => {
//
//     return (
//         <div>
//             {users.map(user=>
//                 <div key={user.id}>{user.name}</div>
//             )
//
//             }
//         </div>
//     );
// };
//
// export default UserList;