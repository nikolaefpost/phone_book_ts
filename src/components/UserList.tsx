import React, {FC} from 'react';
import {ContactActionTypes, IUser} from "../types/types";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/consts";
import UserSmallSvg from "../svg/UserSmallSvg";

interface UserListProps {
    contacts: IUser[]
}

const UserList: FC<UserListProps> = (contacts) => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className='d-flex justify-content-center'>
            <div>
                {contacts.contacts.map(user =>
                    <div key={user.id} className='d-flex justify-content-between align-items-center'>
                        <figure
                            onClick={() => history.push(ABOUT_ROUTE + '/' + user.id)}
                            className='d-flex justify-content-center align-items-center'
                        >
                            <div className='bg-secondary rounded me-3' style={{width: '36px', height: '36px', overflow: 'hidden'}}>
                                {user.img ? <img height='100%' className='rounded' alt='contact foto' src={(user.img).toString()}/> :
                                   <UserSmallSvg/>
                                }
                            </div>
                            <figcaption>{user.name}</figcaption>
                            <figcaption>{user.username}</figcaption>
                        </figure>
                        <span
                            className='ms-2 mb-3 d-flex justify-content-between'
                            onClick={() => {
                                dispatch({type: ContactActionTypes.DELETE_CONTACTS, payload: user.id})
                            }}
                        >
                            <i className="bi bi-trash text-danger"></i>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserList;

