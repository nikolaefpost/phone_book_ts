import React, {FC} from 'react';
import { IUser} from "../types/types";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {ABOUT_ROUTE} from "../utils/consts";
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
                    <figure
                        key={user.id}
                        onClick={()=>{
                            history.push(ABOUT_ROUTE +'/' + user.id)
                        }}
                        className='d-flex justify-content-start align-items-center'
                    >
                            <div className='bg-secondary rounded me-3'>
                                {user.img ? <img className='rounded' src={(user.img).toString()}
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
                )

                }
            </div>
        </div>
    );
};

export default UserList;

