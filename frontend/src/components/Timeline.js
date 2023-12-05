import React from 'react';
import { Chart } from 'react-google-charts';
import { Typography } from '@mui/material';

function TaskTimelineChart({ tasks }) {
  const convertTasksToRows = () => {
    if (!Array.isArray(tasks) || tasks.length === 0) return [];

    const rows = [];
    tasks.forEach((task) => {
      const estStartTime = new Date(0, 0, 0, ...task.estimatedstarttime.split(':'));
      const estEndTime = new Date(0, 0, 0, ...task.estimatedendtime.split(':'));
      const actStartTime = task.actualstart
        ? new Date(0, 0, 0, ...task.actualstart.split(':'))
        : null;
      const actEndTime = task.actualend
        ? new Date(0, 0, 0, ...task.actualend.split(':'))
        : null;
      // console.log('as',actStartTime,actEndTime,estStartTime,estEndTime);
      const taskColor =  generateColor();



      // add EstimatedTime to rows
      rows.push([
        task.category,
        `${task.title} (Planned)`,
        taskColor,
        estStartTime,
        estEndTime,
        

      ]);

      // add ActualTime if available and giving smae color
      if (actStartTime && actEndTime) {
        rows.push([
          task.category,
          `${task.title} (Actual)`,
          taskColor,
          actStartTime,
          actEndTime,
          
        ]);
      }
    });

    return rows;
  };

  const columns = [
    { type: 'string', id: 'task category' },
    { type: 'string', id: 'task title' }, 
    { type: 'string', id: 'style', role: 'style' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
   
  ];

  const rows = convertTasksToRows();
  const data = [columns, ...rows];
  const options = {
    allowHtml: true,
    // timeline: {
    //   // colorByRowLabel: true,
    //   },
    hAxis: {
      viewWindow: {
        min: new Date(0, 0, 0, 0, 0),
        max: new Date(0, 0, 0, 23, 59),
      },
      gridlines: {
        count: 24,
      },
      chartArea: { padding: '0.5rem' },
      format: 'h a', // format of axis
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
// generate a color for each task randomly
const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777888).toString(16); 
};
export default TaskTimelineChart;
