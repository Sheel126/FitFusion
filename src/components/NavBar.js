import { AppBar } from '@mui/material/';
import { Toolbar } from '@mui/material/';
import { Typography } from '@mui/material/';
import { IconButton } from '@mui/material/';
import { Avatar } from '@mui/material/';
import React from 'react';

export default function NavBar() {
    return (
        <>
        
    <AppBar position="static">
      <Toolbar sx={{backgroundColor: '#28282B'}}>
        {/* Left side image/icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
            <Typography variant="h6">Fit Fusion</Typography>
            <Avatar alt="Remy Sharp" src="/images/app_logo.png" sx={{marginLeft: '10px'}} />
        </IconButton>

        {/* Centered app name */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          
        </Typography>

        {/* Right side image/icon */}
        <IconButton edge="end" color="inherit" aria-label="image">
            <Avatar alt="Reminder" src="/images/bell.png" sx={{marginLeft: '10px'}} />
            <Avatar alt="Settings" src="/images/settings.png" sx={{marginLeft: '10px'}} />
            <Avatar alt="User Icon" src="/images/user.png" sx={{marginLeft: '10px'}} />
        </IconButton>
      </Toolbar>
    </AppBar>
        
        </>
    );
}