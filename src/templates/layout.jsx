import React from 'react';

import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline }  from '@mui/material';

function Layout() {
  return (
    <Box style={{display: "flex", height: "100vh"}}>
      <CssBaseline />
      <Grid container sx={{flexGrow: 1}}>
        <Grid item flexBasis={220}>
          Menu goes here
        </Grid>
        <Grid item flex={1}> 
          <Grid>Header</Grid>
          <Grid container spacing={3}>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item>Container 1</Grid>
            <Grid item>Container 2</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout