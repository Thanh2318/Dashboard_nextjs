import { Box, Typography } from "@mui/material";
import React from "react";
import UserBox from "./UserBox";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "80px",
          width: "100%",
          background: "#F8F9FA",
          px: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{fontSize: "16px", fontWeight: "bold", color: "#2D3748"}}>Dashboard</Typography>
        <UserBox />
      </Box>
    </>
  );
};

export default Header;
