
import {IUsers} from "../../models/IUsers.ts";
type PromiseType={
    user:IUsers
}

const UserComponent = ({user}:PromiseType) => {
    return (
        <div>
            {user.firstName}

        </div>
    );
};

export default UserComponent;