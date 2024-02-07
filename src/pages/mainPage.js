
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import FitnessBox from '../components/fitnessbox';
import WaterBox from '../components/waterBox';
import TwoColumnsLayout from '../components/TwoColumnsLayout';
import React from 'react';

export default function mainPage() {
    return (
        <>
          <NavBar />
          <TwoColumnsLayout
            leftColumn={<Box
            sx={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'top',
              height: '50vh', // Set the height to 100% of the viewport height
              //border: '3px solid green',
              //width: '500px'
            }}
          >
            {/* Your content goes here */}
            <div>
              {/* <h1>This is a centered box</h1>
              <p>Your content goes here...</p> */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                height: '40vh', 
                margin: '10px'}}>
                  <FitnessBox calories={2000} totalCalories={2500}/>
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                height: '40vh', 
                margin: '10px'}}>
                  <WaterBox totalWater={2500} consumedWater={200}/>
              </Box>

            
              
            </div>
            
            <div>

            </div>
            
          </Box>}
          rightColumn={<Box sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'top',
                height: '80vh', 
                margin: '10px', 
                border: '2px solid green'}}>

                  <Box sx={{border: '2px solid red', height: '30vh', width: '300px'}} >


                  </Box>

              </Box>}
          />
          

        
        </>
    
    );
  } 