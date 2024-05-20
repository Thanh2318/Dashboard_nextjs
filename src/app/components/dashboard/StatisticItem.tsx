import { Box, Grid, Typography } from "@mui/material";
import { Flex } from "antd";
import React from "react";

type StatisticItemProps = {
  data?: any;
};

const StatisticItem = (props: StatisticItemProps) => {
  const checkNumber = (number: number) => {
    if (number < 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      {props?.data.map((item: any, index: number) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <Flex align="center" justify="space-between" gap={10} style={{background: "white", borderRadius: "10px", padding: "15px", width: "300px", height: "80px"}}>
            <Box>
              <Typography sx={{
                my: 0.5,
                fontSize: "12px",
                color: "#A0AEC0"
              }}>{item.tittle}</Typography>

              <Typography sx={{
                fontSize: "18px",
                color: "#2D3748",
              }}>
                {item.data}
                <span
                  style={{
                    margin: "0 8px",
                    fontSize: "14px",
                    color: `${checkNumber(item.percent) ? "red" : "green"}`,
                  }}
                >
                  {checkNumber(item.percent) ? "" : "+"}
                  {item.percent}%
                </span>
              </Typography>
            </Box>

            <Box sx={{
                background: "teal",
                color: "white",
                height: "45px",
                width: "45px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                borderRadius: "10px",
                justifyContent: "center"
            }}>
                {item.icon}
            </Box>
          </Flex>
        </Grid>
      ))}
    </>
  );
};

export default StatisticItem;
