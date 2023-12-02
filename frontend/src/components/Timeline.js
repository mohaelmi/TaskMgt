import React from "react";
import { Chart } from "react-google-charts";

function TaskTimelineChart({ tasks }) {
  const convertTasksToRows = () => {
    if (!Array.isArray(tasks) || tasks.length === 0) return [];
    
    return tasks.map((task) => {
      const startTime = new Date(0, 0, 0, ...task.estimatedstarttime.split(':'));
      const endTime = new Date(0, 0, 0, ...task.estimatedendtime.split(':'));
    //   console.log('s',startTime);
      return [
        task.category,
        task.title, 
        startTime,
        endTime,
      ];
    });
  };

  const columns = [
    
    { type: "string", id: "task category" },
    { type: "string", id: "task title" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
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
      format: 'HH:mm', // format of axis
    },
  };
  return (
    <Chart
      chartType="Timeline"
      data={data}
      width="100%"
      height="400px"
      options={{options}}
      loader={<div>Loading Chart</div>}
    />
  );
}

export default TaskTimelineChart;
