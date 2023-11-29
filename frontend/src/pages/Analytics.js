import React from 'react';
import { Grid, Paper } from '@mui/material';
import DailyChart from '../components/DailyChart';
import StatusChart from '../components/StatusChart';

const Analytics = () => {
  return (
    <div
      style={{
        marginTop: '2em',
        paddingTop: '3em',
        margin: ' auto',
        maxWidth: '1200px',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Grid container spacing={7} justifyContent='center'>
        <Grid item xs={10} md={6}>
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

        <Grid item xs={10} md={6}>
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
      </Grid>
    </div>
  );
};

export default Analytics;
