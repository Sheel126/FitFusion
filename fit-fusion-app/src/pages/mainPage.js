
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import React from 'react';

export default function mainPage() {
    return (
        <>
          <NavBar />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', // Set the height to 100% of the viewport height
              //border: '3px solid green',
              //width: '500px'
            }}
          >
            {/* Your content goes here */}
            <div>
              <h1>This is a centered box</h1>
              <p>Your content goes here...</p>
            </div>
          </Box>

        
        </>
    
    );
  } 