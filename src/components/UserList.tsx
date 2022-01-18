import React, {FC} from 'react';
import {ContactActionTypes, IUser} from "../types/types";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/consts";
import DeleteButton from "./buttons/DeleteButton";
interface UserListProps{
    contacts: IUser[]
}

const UserList: FC<UserListProps> = (contacts) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='d-flex justify-content-center'>
            <div>
                {contacts.contacts.map(user=>
                    <div key={user.id} className='d-flex justify-content-between align-items-center'>
                        <figure
                            onClick={()=>{
                                history.push(ABOUT_ROUTE +'/' + user.id)
                            }}
                            className='d-flex justify-content-center align-items-center'
                        >
                            <div className='bg-secondary rounded me-3'>
                                {user.img ? <img className='rounded' alt='contact foto' src={(user.img).toString()}
                                                 style={{width: '36px', height: '36px'}}/>:
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#f8f9fa"
                                         className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>}
                            </div>

                            <figcaption>{user.name}</figcaption>
                            <figcaption>{user.username}</figcaption>
                        </figure>
                        <span
                            className='ms-2 mb-3 d-flex justify-content-between'
                            onClick={()=>{dispatch({type: ContactActionTypes.DELETE_CONTACTS, payload: user.id})}}
                        >
                            <DeleteButton/>
                        </span>
                    </div>

                )

                }
            </div>
        </div>
    );
};

export default UserList;

