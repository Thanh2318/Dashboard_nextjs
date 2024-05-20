import { LineChartOutlined, MessageOutlined, PieChartFilled, SettingOutlined, ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MenuItem from './MenuItem';
import { Box } from '@mui/material';

const menus = [
    {
        icon: <PieChartFilled />,
        title: "Dashboard"
    },
    {
        icon: <BarChartOutlinedIcon/>,
        title: "Leaderboard"
    },
    {
        icon: <ShoppingCartOutlined />,
        title: "Order"
    },
    {
        icon: <ShoppingOutlined />,
        title: "Products"
    },
    {
        icon: <LineChartOutlined />,
        title: "Sales Report"
    },
    {
        icon: <MessageOutlined />,
        title: "Messages"
    },
    {
        icon: <SettingOutlined />,
        title: "Settings"
    },
    {
        icon: <LogoutIcon/>,
        title: "Sign Out"
    },
]

type MenuProps = {
    isExpand?: boolean
}

const Menu = (props: MenuProps) => {
  return (
    <Box sx={{my: 5}}>
        <MenuItem data={menus} isExpand={props.isExpand}/>
    </Box>
  )
}

export default Menu