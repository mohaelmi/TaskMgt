import React from 'react';
import { Grid, Paper } from '@mui/material';
import CategoryPieChart from '../components/CategoryPieChart';
import StatusPieChart from '../components/StatusPieChart';

const Analytics = (props) => {
  return (
    <div
      style={{
        margin: ' 2rem auto',
        padding: '2rem',
        maxWidth: '1200px',
        display: 'grid',
        placeItems: 'center',
        // minHeight: '50vh',
      }}
    >
      <Grid container spacing={7} justifyContent='center'>
        <Grid item xs={10} md={6}>
          <Paper
            style={{
              padding: '3px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f0ecf4',
            }}
          >
            <CategoryPieChart categoryCounts={props.categoryCounts} />
          </Paper>
        </Grid>

        <Grid item xs={10} md={6}>
          <Paper
            style={{
              padding: '3px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f0ecf4',
            }}
          >
            <StatusPieChart statusCounts={props.statusCounts} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
