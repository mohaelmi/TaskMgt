//function to calculate category counts(pie chart 1)
const calculateCategoryCounts = (tasks) => {
  const categoryCounts = {};
  tasks.forEach((task) => {
    categoryCounts[task.category] = (categoryCounts[task.category] || 0) + 1;
  });
  return categoryCounts;
};

//function to calculate status counts(pie chart 2)
const calculateStatusCounts = (tasks) => {
  const statusCounts = {};
  tasks.forEach((task) => {
    const status = task.status === 'Closed' ? 'Completed' : task.status
    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });
  return statusCounts;
};
//function to get timeline data(Timeline chart 3):
// Function to calculate EstimatedEndTime
const calculateEstimatedEndTime = (startTime, duration) => {
  const [hours, minutes, seconds] = startTime.split(':').map(Number);
  const start = new Date().setHours(hours, minutes, seconds);

  const endTime = new Date(start + duration * 60000);
  const formattedEndTime = endTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return formattedEndTime;
};
const creatTimelineData = (tasks) => {
  return tasks.map((task) => {
    return {
      id: task.id.toString(),
      title: task.title,
      category: task.category,
      estimatedstarttime: task.estimatedstarttime,
      estimatedendtime: calculateEstimatedEndTime(task.estimatedstarttime,parseInt(task.duration, 10)), // Convert duration to a number if it's a string
      actualstart:task.actualstarttime,
      actualend:task.actualendtime,
    };
  });
};

export {
  calculateCategoryCounts,
  calculateStatusCounts,
  creatTimelineData
}