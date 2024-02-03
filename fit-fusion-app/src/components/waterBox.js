// components/FitnessBox.js
import { Box, Typography } from '@mui/material';

const WaterBox = ({ totalWater, consumedWater }) => {
    const usedconsumedWater = (((totalWater / consumedWater) * 100) - 100) + '%';
  return (
    <Box>
        <Box sx={{
        height: '30vh',
        bgcolor: 'aqua',
        borderRadius: '8px',
        width: '12vw',
        display: 'flex',
        position: 'relative' // Position set to relative
    }}>
        <Box
            sx={{
                width: '12vw',
                height: usedconsumedWater,
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
            <p>{consumedWater} / {totalWater} cups of water drank!</p>
            <p>{totalWater - consumedWater} cups to go</p>
        
        </Typography>
    </Box>
    
  );
};

export default WaterBox;
