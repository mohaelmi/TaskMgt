import React from 'react';
import { Grid, Paper } from '@mui/material';
import CategoryPieChart from '../components/CategoryPiechart';
import StatusPieChart from '../components/StatusPiechart';
import TaskTimeline from '../components/Timeline';
const Analytics = (props) => {
  console.log('analytics',props.tasktimelineData);
  return (
    <div
      style={{
        margin: ' 2rem auto',
        padding: '3rem',
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
      <TaskTimeline tasks={props.tasktimelineData} />
    </div>
  );
};

export default Analytics;
