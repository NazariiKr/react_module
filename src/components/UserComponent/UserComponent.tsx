
import {IUsers} from "../../models/IUsers.ts";
import {useNavigate} from "react-router";
type PromiseType={
    user:IUsers
}

const UserComponent = ({user}:PromiseType) => {
    const navigate=useNavigate()

    const buttonNavigate=()=>{
        navigate('/users/' + user.id + '/carts')
    }

    return (
        <div>
            {user.firstName}
            <button onClick={buttonNavigate}>detall</button>

        </div>
    );
};

export default UserComponent;