import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';

const StatusChart = () => {
  const chartData = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Leisure', 2],
    ['Exercise', 7],
  ];

  const chartOptions = {
    // title: 'My Daily Activities',
    chartArea: { width: '100%', height: '100%' },
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
        Activities Status
      </Typography>
      <Chart
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={chartOptions}
      />
    </Paper>
  );
};

export default StatusChart;
