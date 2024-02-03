// components/FitnessBox.js
import { Box, Typography } from '@mui/material';

const FitnessBox = ({ totalCalories, calories }) => {
    const usedCalories = (totalCalories / calories) + '%';
  return (
    <Box>
        <Box sx={{
        height: '30vh',
        bgcolor: 'salmon',
        borderRadius: '8px',
        width: '12vw',
        display: 'flex',
        position: 'relative' // Position set to relative
    }}>
        <Box
            sx={{
                width: '12vw',
                height: usedCalories,
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                bgcolor: 'background.paper',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute', // Position set to absolute
                top: 0, // Align to the top of the parent box
                left: 0,
                // m: 2,
            }}
            >
        </Box>
    </Box>
        <Typography variant="body">
            <p>{calories} / {totalCalories} Calories!</p>
            <p>{totalCalories - calories} calories to go</p>
        
        </Typography>
    </Box>
    
  );
};

export default FitnessBox;
