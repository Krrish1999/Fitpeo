// eslint-disable-next-line no-unused-vars
import React from "react";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';


import { SidebarData } from "./SidebarData";

function Sidebar(){
    return(
        // border-gray-700 rounded-md ml-2 flex 
        <div className="w-60 h-full  bg-sidebarBG  s flex flex-col items-start p-8">
            <div className="text-white text-2xl">   < SpaceDashboardIcon sx={{ fontSize: 35 }}/> Dashboard</div>
            <div className="mt-9 ">
                <ul className="space-y-4 ">
                    { SidebarData.map((val, key) =>{
                        return (
                            <li key={key} onClick={() => {window.location.pathname=val.link}}>
                                <div className="box p-2 relative backdrop-blur-md cursor-pointer rounded-lg   flex space-x-2 hover:bg-blue-900 ">

                                    <div className="text-white">{val.icon}</div>
                                    <div className="text-white">{val.title}</div>
                                </div>



                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            

        </div>
    );
}
export default Sidebar;