import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';

const StatusPieChart = ({ statusCounts }) => {
  const data = [['Status', 'Count']];
  for (const status in statusCounts) {
    // const color="";
    // if(status=='Closed') {
    //   color='green';
    // }
    // else if (status=="ToDo"){
    //   color='gray';
    // }else{
    //   color='blue';
    // }
    data.push([status, statusCounts[status]]);
  }

  const options = {
    // title: 'Tasks by Status',
    chartArea: {
      width: '100%',
      height: '90%',
      margin: '0 auto',
    },
    // pieHole: 0.4,

    is3D: true,
    backgroundColor: 'white',
    slices: {
      0: { offset: 0.1, color: 'gray' },
      1: { offset: 0.1, color: 'blue' },
      2: { offset: 0.1, color: 'green'},
    },
  };

  return (
    <Paper
      sx={{
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '7px',
        boxShadow: 'none',
        marginBottom: '4px',
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
