import {useEffect, useState} from "react";
import {IUsers} from "../../models/IUsers.ts";
import {getUsers} from "../../services/users.api.service.tsx";
import UserComponent from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [searchParams] = useSearchParams({page: '1'})
    useEffect(() => {
        const currentPage=searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}) => setUsers(users))
    }, [searchParams]);


    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;