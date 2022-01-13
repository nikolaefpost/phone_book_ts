import React, {FC} from 'react';
import {IUser} from "../types/types";
interface UserListProps{
    users: IUser[]
}


const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user=>
                <div key={user.id}>{user.name}</div>
            )

            }
        </div>
    );
};

export default UserList;