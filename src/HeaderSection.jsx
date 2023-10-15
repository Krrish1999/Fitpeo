import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchBar from "./SearchBar";



function HeaderSection(){
    return(
        <>
            <div className="flex space-x-1 mb-6 justify-between  "> 
               <div className="flex space-x-2">
                <h3 className="font-semibold flex ">Hello Kunal</h3> <WavingHandIcon className="text-skin"/>
                </div>
                <SearchBar/>
            </div>
            

            <div className="flex justify-between  ">
        
                <div className=" flex items-center bg-white p-4 rounded-lg shadow-md">
                    <MonetizationOnIcon sx={{ fontSize: 80 }} style={{ color: "lightgreen" }} />
                
                    <div>
                        <h2 className=" text-xm">Earnings</h2>
                        <p className="text-2xl font-bold  flex items-center ">$5.8k</p>
                    </div>
                </div>

                <div className=" flex items-center bg-white p-2 rounded-lg shadow-md">
                    <AssignmentIcon sx={{ fontSize: 80 }} style={{ color: "lightpurple" }}/>
                    <div>
                        <h2 className=" text-xm">Orders</h2>
                        <p className="text-2xl font-bold  flex items-center ">$2.5k</p>
                    </div>
                
                </div>

                <div className=" flex items-center bg-white p-4 rounded-lg shadow-md">
                <AccountBalanceWalletIcon sx={{ fontSize: 80 }} style={{ color: "skyblue" }}/>
                    <div>
                        <h2 className=" text-xm">Balance</h2>
                        <p className="text-2xl font-bold  flex items-center ">$4.5k</p>
                    </div>
                </div>

                <div className=" flex items-center bg-white p-4 rounded-lg shadow-md">
                <ShoppingBagIcon sx={{ fontSize: 80 }} style={{ color: "blue" }}/>
                    <div>
                        <h2 className=" text-xm inset-1">Total Sales</h2>
                        <p className="text-2xl font-bold  flex items-center ">$3.8k</p>
                    </div>
                </div>  
            </div>
        </> 

    )
}

export default HeaderSection;