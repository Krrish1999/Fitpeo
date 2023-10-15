/* eslint-disable no-unused-vars */
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PercentIcon from '@mui/icons-material/Percent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
export  const  SidebarData = [
    {
        title:"Dashboard",
        icon: <DashboardIcon/>,
        link:"/Dashboard"

    },
    {
        title:"Product",
        icon:<Inventory2OutlinedIcon/>,
        link:"/product"

    },
    {
        title:"Customers",
        icon:<AccountCircleRoundedIcon/>,
        link:"/customers"

    },
    {
        title:"Income",
        icon:<AccountBalanceWalletIcon/>,
        link:"/income"

    },
    {
        title:"Promote",
        icon:<PercentIcon/>,
        link:"/promote"

    },
    {
        title:"Help",
        icon:<LiveHelpIcon/>,
        link:"/help"

    }
]
 


