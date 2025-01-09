import {Outlet} from "react-router";
import MenuComponent from "../components/menu/MenuComponent.tsx";


const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;