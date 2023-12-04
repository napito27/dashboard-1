import React from 'react';

// import  Grid  from '@mui/material/Unstable_Grid2';
import  { Box, CssBaseline, Grid, Paper }  from '@mui/material';

import "../styles/app.css"

function Layout( {children} ) {
  const [header, menu, kpi1, kpi2, kpi3, kpi4, barChart, pieChart ] = children;

  return (
    <Box sx={{display: "flex", height: "100vh"}} >
      <CssBaseline />      
      <Grid container sx={{flexGrow: 1}} >
        <Grid item flexBasis={220}>
          {menu}
        </Grid>
        
        <Grid item flex={1} > 
          <Grid item >
            {header}
          </Grid>
          
          <Grid container sx={{margin:'0px', padding: "25px 0px", bgcolor:'#F9FAFC'}}>
            
            <Grid item container xs={12} spacing={3} sx={{margin:'0px', paddingRight:'25px'}}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {kpi1}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {kpi2}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {kpi3}
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {kpi4}
              </Grid>
            </Grid>
            
            <Grid item container xs={12} spacing={3} sx={{margin:'0px', paddingRight:'25px'}}>
              <Grid item xs={8}>
                <Paper elevation={3} >
                  {barChart}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={3} >
                  {pieChart}
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