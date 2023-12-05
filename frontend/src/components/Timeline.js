import React from 'react';
import { Chart } from 'react-google-charts';
import { Typography } from '@mui/material';

function TaskTimelineChart({ tasks }) {
  const convertTasksToRows = () => {
    if (!Array.isArray(tasks) || tasks.length === 0) return [];

    return tasks.map((task) => {
      const startTime = new Date(
        0,
        0,
        0,
        ...task.estimatedstarttime.split(':')
      );
      const endTime = new Date(0, 0, 0, ...task.estimatedendtime.split(':'));
      //   console.log('s',startTime);
      return [task.category, task.title, startTime, endTime];
    });
  };

  const columns = [
    { type: 'string', id: 'task category' },
    { type: 'string', id: 'task title' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ];

  const rows = convertTasksToRows();
  const data = [columns, ...rows];
  const options = {
    allowHtml: true,
    hAxis: {
      viewWindow: {
        min: new Date(0, 0, 0, 0, 0),
        max: new Date(0, 0, 0, 23, 59),
      },
      gridlines: {
        count: 24,
      },
      chartArea: { padding: '0.5rem' },
      format: 'HH:mm', // format of axis
    },
    height: 1000,
  };
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '7px',
        maxWidth: '100%',
        height: '100%',
      }}
    >
      <Typography
        variant='h6'
        mt={2}
        sx={{
          mr: 2,
          padding: '5px',
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontSize: '16px',
          textDecoration: 'none',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        Tasks Timeline
      </Typography>
      <Chart
        chartType='Timeline'
        data={data}
        width='100%'
        height='100%'
        options={{ options }}
        loader={<div>Loading Chart</div>}
      />
    </div>
  );
}

export default TaskTimelineChart;
