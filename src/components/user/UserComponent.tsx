import {FC} from "react";
import {IUsers} from "../../models/IUsers.ts";
type UserType={
    user:IUsers
}

const UserComponent:FC<UserType> = ({user}) => {
    return (
        <div>
            {user.id} {user.firstName}

        </div>
    );
};

export default UserComponent;