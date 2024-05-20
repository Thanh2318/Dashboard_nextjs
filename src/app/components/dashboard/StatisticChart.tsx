"use client";
import { Box, Grid, Typography } from "@mui/material";
import { Flex } from "antd";
import React from "react";

type StatisticChartProps = {
  data?: any;
};

const StatisticChart = (props: StatisticChartProps) => {
  return (
    <>
      {props.data.map((item: any, index: number) => (
        <Grid item key={index} xs={12} md={3}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box
                sx={{
                  fontSize: "25px"
                }}
              >
                {item.icon}
              </Box>

              <Typography>{item.tittle}</Typography>
            </Box>

            <Typography>{item.data}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default StatisticChart;
