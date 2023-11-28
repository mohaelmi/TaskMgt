import React from 'react';
import Chart from 'react-google-charts';
const StatusPieChart = ({ statusCounts }) => {
  const data = [['Status', 'Count']];
  console.log(statusCounts);
  for (const status in statusCounts) {
    data.push([status, statusCounts[status]]);
  }

  const options = {
    title: 'Tasks by Status',
    pieHole: 0.4,
    is3D: true,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default StatusPieChart;

