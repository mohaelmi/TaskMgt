import React from 'react'
import Taskheader from './Taskheader';
import TaskCard from './TaskCard';

function TaskListItem({
  status,
  tasks,
  todos,
  inprogress,
  done,
  deleteTask,
  showEditComponent,
}) {
  // console.log(status);
  let text = 'todos';
  let tasksToMap = todos;

  if (status === 'progress') {
    text = 'In Progress';
    tasksToMap = inprogress;
  }

  if (status === 'done') {
    text = 'Completed';
    tasksToMap = done;
  }
  return (
    <div className='w-64'>
      <Taskheader text= {text}  count = {tasksToMap.length} bg = "bg-slate-500" />
      {tasksToMap.length > 0 && tasksToMap.map(task => <TaskCard key = {task.id } task = {task} tasks = {tasks} deleteTask = {()=> deleteTask(task.id)} showEditComponent ={() => showEditComponent(task.id)}/> ) }
      {/* list */}
    </div>
  );
}

export default TaskListItem;
