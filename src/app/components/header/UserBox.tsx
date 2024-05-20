import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const UserBox = () => {
  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",

    }}>
        <TextField
          placeholder='Type here...'
          sx={{".MuiInputBase-root":{
            borderRadius: "30px",
            height: "40px"
          }}}
          InputProps={{
            startAdornment: <InputAdornment position="start">
                <SearchIcon/>
            </InputAdornment>,
          }}
        />

        <Link href="" style={{color: "#737791"}}>
            <PersonIcon/>
            Sign In
        </Link>

        <IconButton>
            <SettingsIcon/>
        </IconButton>

        <IconButton>
            <NotificationsIcon/>
        </IconButton>
    </Box>
  )
}

export default UserBox