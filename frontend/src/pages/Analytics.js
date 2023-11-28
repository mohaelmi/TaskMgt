import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';
import DailyChart from '../components/DailyChart';
import StatusChart from '../components/StatusChart';

const Analytics = () => {
  return (
    <div
      style={{
        marginTop: '5%',
        marginBottom: '2%',
        marginLeft: '2%',
        marginRight: '2%',
      }}
    >
      <Grid container spacing={7} justifyContent='center'>
        <Grid item xs={12} md={4.5}>
          <Paper
            style={{
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f0ecf4',
            }}
          >
            <DailyChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4.5}>
          <Paper
            style={{
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f0ecf4',
            }}
          >
            <StatusChart />
          </Paper>
        </Grid>

        {/* <Grid item xs={12} md={4}>
          <Paper
            style={{
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f0ecf4',
            }}
          >
            <Timeline />
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Analytics;
