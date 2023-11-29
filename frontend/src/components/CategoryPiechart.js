import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';

const CategoryPieChart = ({ categoryCounts }) => {
  const data = [['Category', 'Count']];
  console.log(categoryCounts);
  for (const category in categoryCounts) {
    data.push([category, categoryCounts[category]]);
  }

  const options = {
    // title: 'Tasks by Category',
    pieHole: 0.4,
    is3D: true,
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
        Tasks by Category
      </Typography>
      <Chart
        loader={<div>Loading Chart</div>}
        chartType='PieChart'
        data={data}
        options={options}
      />
    </Paper>
  );
};

export default CategoryPieChart;
