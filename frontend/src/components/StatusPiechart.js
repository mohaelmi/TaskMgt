import React from 'react';
import Chart from 'react-google-charts';
const StatusPieChart = ({ statusCounts }) => {
  const data = [['Status', 'Count']];
  for (const status in statusCounts) {
    data.push([status, statusCounts[status]]);
  }

  const options = {
    title: 'Tasks by Status',
    // pieHole: 0.4,
    is3D: true,
    slices: {
      1: { offset: 0.2 ,color: 'gray'},
      2: { offset: 0.3 ,color: 'blue'},
      3: { offset: 0.4 ,color: 'green'},
  }};

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
      />
    </div>
  );
};

export default StatusPieChart;

