import React from 'react';

import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline }  from '@mui/material';

import "../styles/app.css"

function Layout( {children} ) {
  const [header, menu] = children;

  return (
    <Box style={{display: "flex", height: "100vh"}}>
      <CssBaseline />      
      <Grid container sx={{flexGrow: 1}} spacing={0.5}>
        <Grid item flexBasis={220}>
          {menu}
        </Grid>
        
        <Grid item flex={1}> 
          <Grid>
            {header}
          </Grid>
          <Grid container >
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
            <Grid xs={3}>PKI</Grid>
          </Grid>
          <Grid container >
            <Grid>Container 1</Grid>
            <Grid>Container 2</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;