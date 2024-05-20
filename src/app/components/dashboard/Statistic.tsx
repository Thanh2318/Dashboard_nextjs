import React from 'react'
import WalletIcon from '@mui/icons-material/Wallet';
import LanguageIcon from '@mui/icons-material/Language';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';
import StatisticItem from './StatisticItem';

const statistics = [
  {
    tittle: "Today's Money",
    data: "$53,000",
    percent: 55,
    icon: <WalletIcon/>
  },
  {
    tittle: "Today's Users",
    data: "2,300",
    percent: 5,
    icon: <LanguageIcon/>
  },
  {
    tittle: "New Clients",
    data: "+3,052",
    percent: -14,
    icon: <NoteAddIcon/>
  },
  {
    tittle: "Total Sales",
    data: "$173,000",
    percent: 8,
    icon: <ShoppingCartIcon/>
  },
]

const Statistic = () => {
  return (
    <Grid container spacing={2}>
      <StatisticItem data={statistics} />
    </Grid>
  )
}

export default Statistic