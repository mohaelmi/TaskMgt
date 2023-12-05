import React from 'react';
import { Grid, Paper } from '@mui/material';
import CategoryPieChart from '../components/CategoryPieChart';
import StatusPieChart from '../components/StatusPiechart';
import TaskTimeline from '../components/Timeline';
const Analytics = (props) => {
  console.log('analytics', props.tasktimelineData);
  return (
    <div
      style={{
        margin: '4% auto',
        marginBottom: '5px',
        padding: '0.6rem',
        maxWidth: '1000px',
        backgroundColor: '#e6e8e9bb',
        maxHeight: '60vh',
        borderRadius: '10px',
      }}
    >
      <Grid item xs={12} md={12}>
        <Paper
          style={{
            padding: '3px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            boxShadow: 'none',
            borderRadius: '7px',
          }}
        >
          <TaskTimeline tasks={props.tasktimelineData} />
        </Paper>
      </Grid>

      <div
        style={{
          marginTop: '11px',
          backgroundColor: '#e6e8e9bb',
          // maxWidth: '1200px',
          display: 'grid',
          placeItems: 'center',
          // paddingBottom: '2px',
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
    </div>
  );
};

export default Analytics;
