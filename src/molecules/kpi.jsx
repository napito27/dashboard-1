import React from 'react';

import { Grid, Paper, Avatar } from '@mui/material';

import "../styles/app.css";

function KPI({icon, iconColor, data}) {
  // const [ title, amount, amountType, , changeFromLastMonth, type ] = data

  return (
    <Paper  elevation={1} sx={{padding: "5px 30px"}}>
      <Grid container className='card-container'>
        <Grid item className='card'>
          <h6 className='card-title'>budget</h6>
          <h1>$24k</h1>
          <p>222</p>
          {/* <p><span style={{color: `${iconColor}`}}>12%</span> from last month</p> */}
        </Grid>
        <Grid item className='card-icon'>
          <Avatar sx={{bgcolor: `${iconColor}`}}>
            {icon}
          </Avatar>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default KPI;