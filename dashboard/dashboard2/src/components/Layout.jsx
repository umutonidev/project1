import React from "react";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import{Outlet} from'react-router-dom';
import View from "./View";
const Layout=()=>{
    return(
        <div>
            <Sidebar/> 
            <Navbar/>
            <Outlet/>
            
            
            

        </div>
    )
}
export default Layout
