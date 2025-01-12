import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UserPage from "../pages/UserPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const routs=createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
            {path:'users',element:<UserPage/>,children:[
                    { path: ':id/carts', element: <CartsPage/>}
                ]}
        ]}
])