import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';

const StatusPieChart = ({ statusCounts }) => {
  const data = [['Status', 'Count']];
  for (const status in statusCounts) {
    data.push([status, statusCounts[status]]);
  }

  const options = {
    // title: 'Tasks by Status',
    chartArea: { width: '100%', height: '100%' },
    // pieHole: 0.4,
    is3D: true,
    slices: {
      1: { offset: 0.2, color: 'gray' },
      2: { offset: 0.3, color: 'blue' },
      3: { offset: 0.4, color: 'green' },
    },
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <Typography
        variant='h6'
        mt={1}
        sx={{
          mr: 2,
          mb: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontSize: '16px',
          textDecoration: 'none',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        Tasks by Status
      </Typography>
      <Chart
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </Paper>
  );
};

export default StatusPieChart;
