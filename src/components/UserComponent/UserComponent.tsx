import {IUsers} from "../../models/IUsers.ts";

type UserType={
    user:IUsers
}

const UserComponent = ({user}:UserType) => {
    return (
        <div>
            {user.firstName}
        </div>
    );
};

export default UserComponent;