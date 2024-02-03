// components/TwoColumnsLayout.js
import React from 'react';
import Grid from '@mui/material/Grid';

const TwoColumnsLayout = ({ leftColumn, rightColumn }) => {
  return (
    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={12} sm={2}>
        {leftColumn}
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} sm={10}>
        {rightColumn}
      </Grid>
    </Grid>
  );
};

export default TwoColumnsLayout;
