import React from 'react';

import { LinearProgress } from '@mui/material';

function ProgressBar({amount}) {
  
  return (
    <div className='progress-bar'>
      <LinearProgress variant="determinate" color='info' value={amount} />
    </div>
  );
}

export default ProgressBar;