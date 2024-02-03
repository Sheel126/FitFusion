// components/FitnessBox.js
import Box from '@mui/material';
import Typography from '@mui/material';

const FitnessBox = ({ totalCalories, calories }) => {
  // Define the size based on calories. This is a basic example, adjust the formula as needed.
  // const size = totalCalories / calories;

  return (
    <Box sx={{
        height: totalCalories,
        width: 15
    }}>
        <Box
            sx={{
                width: 15,
                height: calories,
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'primary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                m: 2,
            }}
            >
            <Typography variant="body1">{calories} Calories</Typography>
        </Box>
    </Box>
    
  );
};

export default FitnessBox;