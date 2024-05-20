"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const { Content, Sider } = Layout;

const Template = ({ children }: any) => {
  const [isExpand, setIsExpand] = useState(true);
  const handleClick = () => {
    setIsExpand(!isExpand);
  };
  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider style={{ background: "#F8F9FA" }} width={isExpand ? 219 : 80}>
        <Sidebar isExpand={isExpand} />
        <Box
          sx={{
            position: "fixed",
            bottom: "0",
            width: `${isExpand ? "219px" : "80px"}`,
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            background: "#4FD1C5",
          }}
          onClick={handleClick}
        >
          <IconButton sx={{ color: "white"
          }}>
            {isExpand? <ArrowBackIosIcon />: <ArrowForwardIosIcon/>}
            
          </IconButton>
        </Box>
      </Sider>
      <Layout>
        <Header />
        <Content style={{ background: "#F8F9FA", padding: "16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Template;
