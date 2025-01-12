import UsersComponent from "../components/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router";


const UserPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
           <UsersComponent/>
            </div>
    );
};

export default UserPage;