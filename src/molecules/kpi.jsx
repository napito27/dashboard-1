import React from 'react';

import { Paper, Avatar, Box } from '@mui/material';

import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';

import ProgressBars from '../atoms/progressBar.tsx';

import "../styles/app.css";


function KPI({icon, iconColor, data}) {
  const { title, amount, amountType, changeFromLastMonth, type } = data ?? {}
  
  const arrowColor = changeFromLastMonth > 0 ? "increase" : "decrease";
  const percentage = changeFromLastMonth !== null ? "%" : "";
  const percentageDisplay = changeFromLastMonth > 0 ? "gain" : "decrease";
  const montlyChange = changeFromLastMonth > 0 ? <ArrowUpwardOutlined className={arrowColor} /> : <ArrowDownwardOutlined className={arrowColor} />;
  
  const monthlyChangeDisplay = changeFromLastMonth === null ? "" : montlyChange;
  
  let displayInfo;
  if (type === "change") {
      displayInfo = " Since last month";
    } else if (type === "progress") {
      displayInfo = <ProgressBars amount={amount}/>;
    } else {
      displayInfo = "";
  }

  const amountDecorator = (amount) => {
    const prefix = amountType === 'thousands' ? '$' : '';
    const suffix = amountType === 'thousands' ? 'K' : '%';
    const formattedAmount = amountType === 'thousands' ? amount / 1000 : amount;
    return `${prefix}${formattedAmount}${suffix}`
  }

  return (
    <Paper  elevation={1} className='kpi-container'>
      <Box className='card-header-container'>
        <Box className='card-title-container'>
          <h6 className='card-title'>{title}</h6>
          <h1>{amountDecorator(amount)}</h1>
        </Box >
        <Box className='card-icon-container '>
          <Avatar sx={{bgcolor: `${iconColor}`}} >
            {icon}
          </Avatar>
        </Box>
      </Box>
      <p className='kpi-footer'>
        {monthlyChangeDisplay}
        <span className={percentageDisplay}>{changeFromLastMonth}{percentage}</span>
        {displayInfo}
      </p>
    </Paper>
  );
}

export default KPI;