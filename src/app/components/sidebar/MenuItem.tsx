'use client';
import { Box, Typography } from "@mui/material";
import { Flex } from "antd";
import React, { useState } from "react";

type MenuItemProps = {
  data: any;
  isExpand?: boolean;
};

const MenuItem = (props: MenuItemProps) => {
  const [active, setActive] = useState(0);
  const handleClick = (i: any) => {
    setActive(i);
  };
  return (
    <>
      {props?.data.map((item: any, index: number) => (
        <Box
          key={index}

          onClick={() => {
            handleClick(index);
          }}
          sx={{
            height: "54px",
            my: 0.5,
            ".active": {
              background: "white",
              borderRadius: "10px",
            },
            ".menuItem:hover": {
              background: "#ccc",
              borderRadius: "10px",
            },
          }}
        >
          <Flex
            gap={15}
            align="center" justify={props.isExpand? "start" : "center" }
            style={{ padding: "8px 16px" }}
            className={`${active === index ? "active" : "menuItem"}`}
          >
            <Box
              sx={{
                width: "24px",
                fontSize: "20px",
                color: `${active === index ? "teal" : "#737791"}`,
                
              }}
            >
              {item.icon}
            </Box>
            {props.isExpand && (
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: `${active === index ? "#2D3748" : "#737791"}`,
                }}
                fontWeight={400}
              >
                {item.title}
              </Typography>
            )}
          </Flex>
        </Box>
      ))}
    </>
  );
};

export default MenuItem;
