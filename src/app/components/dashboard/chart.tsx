"use client";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Card, Grid, Typography } from '@mui/material';
import StatisticChart from './StatisticChart';
import WalletIcon from '@mui/icons-material/Wallet';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';

const statisticChart = [
  {
    icon: <WalletIcon/>,
    tittle: "Users",
    data: "32,984",
    slider: ""
  },
  {
    icon: <RocketLaunchIcon/>,
    tittle: "Clicks",
    data: "2,42",
    slider: ""
  },
  {
    icon: <ShoppingCartIcon/>,
    tittle: "Sales",
    data: "2,400",
    slider: ""
  },
  {
    icon: <BuildIcon/>,
    tittle: "Items",
    data: "320",
    slider: ""
  },
]

export default function BasicBars() {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5} sm={6} sx={{
        ".MuiPaper-root": {
          width: "652px"
        }
      }}>
        <Card sx={{
          boxShadow: "none"
        }}>

        <BarChart
          series={[{ data: [400, 300, 500, 400, 300, 500] }]}
          width={620}
          height={200}
        />

        <Box sx={{
          margin: "10px",
          color: "#A0AEC0",
        }}>
          <Typography sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#2D3748",
          }}>
            Active Users
          </Typography>
          <span style={{color: "green", fontSize:"14px", marginRight: "5px"}}>
            (+23)
          </span>
          than last week
        </Box>

        <Grid container spacing={2} >
          <StatisticChart data={statisticChart}/>
        </Grid>

        </Card>

      </Grid>

      <Grid item xs={12} md={7} sm={6}>

      </Grid>

    </Grid>
    </>
  );
}
