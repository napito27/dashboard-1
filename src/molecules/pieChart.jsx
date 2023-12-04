import React from 'react';

import { Box, Divider } from '@mui/material';
import { PieChart, Pie, Cell, Legend } from 'recharts';

import {
  ComputerOutlined,
  LocalPhone,
  TabletMacOutlined
} from '@mui/icons-material';

const COLORS = ['#3F51B5', '#E53935', '#FB8C00'];

function TrafficPieChart({data}) {
  
    return (
      <Box className='pie-chart-container'>
        <h3 className='pie-chart-header'>Traffic by Device</h3>
        <Divider />
        <PieChart 
          width={400} 
          height={260} 
        >
          <Pie
            data={data}
            cx="50%"
            cy="52%"
            startAngle={90}
            endAngle={-360}
            innerRadius={50}
            outerRadius={100}
            paddingAngle={3}
            dataKey="traffic"
            nameKey="device"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Legend layout="horizontal" verticalAlign="top" />
        </PieChart>
        <Box className='pie-chart-footer'>
          <Box className='pie-chart-icons'>
            <ComputerOutlined />
            <TabletMacOutlined />
            <LocalPhone />
          </Box>
          <table className='pie-chart-table'>
            <tbody>
              {data.map((data, index) => {
                return (
                  <th >
                    <tr >{data.device}</tr>
                    <tr style={{ color: COLORS[index % COLORS.length] }}>{data.traffic}%</tr>
                  </th> 
                )
              })}
            </tbody>
          </table>
          </Box>
      </Box>
    );
  }

export default TrafficPieChart;