import React from 'react';

// import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline, Grid, Paper }  from '@mui/material';

import "../styles/app.css"

function Layout( {children} ) {
  const [header, menu, kpi1, kpi2, kpi3, kpi4, lineChart ] = children;

  return (
    <Box sx={{display: "flex", height: "100vh"}} >
      <CssBaseline />      
      <Grid container sx={{flexGrow: 1}} >
        <Grid item flexBasis={220}>
          {menu}
        </Grid>
        
        <Grid item flex={1} spacing={4}> 
          <Grid item >
            {header}
          </Grid>
          <Grid container spacing={2} sx={{padding: "50px 25px"}}>
            <Grid item container xs={12} spacing={2} >
              <Grid item xs={3}>
                {kpi1}
              </Grid>
              <Grid item xs={3}>
                {kpi2}
              </Grid>
              <Grid item xs={3}>
                {kpi3}
              </Grid>
              <Grid item xs={3}>
                {kpi4}
              </Grid>
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={6}>
                <Paper elevation={3} square>
                  {lineChart}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3} square>
                  Container 2
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;