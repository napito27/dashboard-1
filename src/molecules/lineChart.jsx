import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Aug 1',
    thisYear: 10,
    lastYear: 5,
  },
  {
    name: 'Aug 2',
    thisYear: 15,
    lastYear: 10,
  },
  {
    name: 'Aug 3',
    thisYear: 20,
    lastYear: 15,
  },
  {
    name: 'Aug 4',
    thisYear: 25,
    lastYear: 20,
  },
  {
    name: 'Aug 5',
    thisYear: 30,
    lastYear: 25,
  },
  {
    name: 'Aug 6',
    thisYear: 25,
    lastYear: 20,
  },
  {
    name: 'Aug 7',
    thisYear: 20,
    lastYear: 15,
  },
];

const colors = ['#102332', '#8550E5'];

export default function Chart() {
  
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="thisYear" stroke={colors[0]} activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="lastYear" stroke={colors[1]} />
    </LineChart>
  );
}
