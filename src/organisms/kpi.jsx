import React from 'react';

import { Grid, Paper } from '@mui/material';

function KPI() {
  return (
    <Paper>
      <Grid>
        <h6>budget</h6>
        <h1>$24K</h1>
        <p>12% from last month</p>
      </Grid>
    </Paper>
  );
}

export default KPI;