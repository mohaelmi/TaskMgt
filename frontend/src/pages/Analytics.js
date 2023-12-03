import React from 'react';
import { Grid, Paper } from '@mui/material';
import CategoryPieChart from '../components/CategoryPiechart';
import StatusPieChart from '../components/StatusPiechart';
import TaskTimeline from '../components/Timeline';
const Analytics = (props) => {
  console.log('analytics', props.tasktimelineData);
  return (
    <div
      style={{
        margin: ' 2rem auto ',
        marginTop: '4rem ',
        padding: '3.5rem',
        maxWidth: '1000px',
        // backgroundColor: '#eff4f8bb',
        maxHeight: '100vh',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          marginTop: '-1.5rem',
          // maxWidth: '1200px',
          display: 'grid',
          placeItems: 'center',
          // backgroundColor: '#eff4f8',
          paddingBottom: '2px',
        }}
      >
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={10} md={6}>
            <Paper
              style={{
                // padding: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginBottom: '4px',
                boxShadow: 'none',
                borderRadius: '7px',
              }}
            >
              <CategoryPieChart categoryCounts={props.categoryCounts} />
            </Paper>
          </Grid>

          <Grid item xs={10} md={6}>
            <Paper
              style={{
                // padding: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                boxShadow: 'none',
                borderRadius: '7px',
              }}
            >
              <StatusPieChart statusCounts={props.statusCounts} />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          marginTop: '1.5rem',
          borderRadius: '7px',
        }}
      >
        <TaskTimeline tasks={props.tasktimelineData} />
      </div>
    </div>
  );
};

export default Analytics;
