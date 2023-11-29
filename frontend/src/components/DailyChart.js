import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { Chart } from 'react-google-charts';

const DailyChart = () => {
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
        My Daily Activities
      </Typography>
      <Chart
        chartType='PieChart'
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 8],
          ['Leisure', 2],
          ['Reading', 2],
        ]}
        options={{
          chartArea: { width: '100%', height: '100%' },
          //   title: 'My Daily Activities',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </Paper>
  );
};

export default DailyChart;
