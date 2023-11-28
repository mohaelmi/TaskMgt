import React from 'react';
import Chart from 'react-google-charts';
const CategoryPieChart = ({ categoryCounts }) => {
  const data = [['Category', 'Count']];
  console.log(categoryCounts);
  for (const category in categoryCounts) {
    data.push([category, categoryCounts[category]]);
  }

  const options = {
    title: 'Tasks by Category',
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

export default CategoryPieChart;
