import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { Box } from "@mui/material";

type SidebarProps = {
    isExpand?: boolean;
  };

const Sidebar = (props: SidebarProps) => {
  return (
    <div style={{ padding: props.isExpand? "16px" : "16px 12px" }}>

            <Logo isExpand ={props.isExpand}/>
            <Menu isExpand ={props.isExpand}/>
        
    </div>
  );
};

export default Sidebar;
