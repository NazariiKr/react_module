import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {routs} from "./router/router.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routs}/>)
