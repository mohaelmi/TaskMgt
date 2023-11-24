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
  openModal,
  showEditTask
}) {
  // console.log(status);
  let text = 'todos';
  let tasksToMap = todos;
  let bg = "bg-slate-600";

  if (status === 'progress') {
    text = 'In Progress';
    tasksToMap = inprogress;
    bg = "bg-indigo-600"
  }

  if (status === 'done') {
    text = 'Completed';
    tasksToMap = done;
    bg = "bg-green-600"
  }
 
  return (
    <div className='w-64'>
      <Taskheader text= {text}  count = {tasksToMap?.length} bg = {bg} />
      {tasksToMap?.length > 0 && tasksToMap.map(task => <TaskCard key = {task.id } task = {task} tasks = {tasks} deleteTask = {()=> deleteTask(task.id)} openModel ={() => openModal(task)} showEditTask ={()=> showEditTask(task)} /> ) }
      {/* list */}
    </div>
  );
}

export default TaskListItem;
