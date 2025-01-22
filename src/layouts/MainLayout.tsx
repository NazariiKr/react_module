import {Outlet} from "react-router";
import MenuComponent from "../components/menu/MenuComponent.tsx";


const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;