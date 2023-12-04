import { Box, Divider } from '@mui/material';

import LatestBarChart from './barChart';

function ChartComponent({data}) {
  
  return (
    <Box className='bar-chart-container'>
      <Box className='bar-chart-title'>
        <h3><strong>Latest Sales</strong></h3>
        <div className='chart-filter'>Last 7 days </div>
      </Box>
      <Divider />
      <Box className='bar-chart'>
        <LatestBarChart data={data}/>
      </Box>
    </Box>
  );
}

export default ChartComponent;