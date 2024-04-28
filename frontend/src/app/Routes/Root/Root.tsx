import { Outlet } from "react-router-dom";
import TopBar from "./Sub-Components/TopBar/Topbar";
import NavBar from "./Sub-Components/NavBar/NavBar";

export function Root(){
    return(
        <div>
            <TopBar></TopBar>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}