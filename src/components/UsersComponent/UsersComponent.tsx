import {useEffect, useState} from "react";
import {IUsers} from "../../models/IUsers.ts";
import {getAll} from "../../services/general.api.servic.tsx";
import {IBaseResponseModel} from "../../models/IBaseResponseModule.ts";
import UserComponent from "../UserComponent/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & {users:IUsers[]}>('/users')
            .then(({users})=>setUsers(users))

    }, []);


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;