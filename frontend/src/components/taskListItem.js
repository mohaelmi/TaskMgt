import React from 'react'
import Taskheader from './Taskheader';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';

function TaskListItem({
  status,
  tasks,
  todos,
  inprogress,
  done,
  deleteTask,
  openModal,
  showEditTask,
  moveTask,
  openTaskDetail
}) {


  const [{ isOver }, drop] = useDrop(() => ({ 
    accept: "task",
    drop: (item) => moveTask(item.id, item.prevStatus, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  // console.log("is over", tasks);


  // console.log(status);
  let text = 'Todo';
  let tasksToMap = todos;
  let bg = "bg-slate-600";

  if (status === 'In Progress') {
    text = 'In Progress';
    tasksToMap = inprogress;
    bg = "bg-indigo-600"
  }

  if (status === 'Closed') {
    text = 'Completed';
    tasksToMap = done;
    bg = "bg-green-600"
  }
 
  return (
    <div ref={drop} className={`w-64 ${isOver ? "bg-slate-200 rounded-md p-2" : "opacity-100" }`}>
      <Taskheader text= {text}  count = {tasksToMap?.length} bg = {bg} />
      {tasksToMap.length > 0 && tasksToMap.map(task => <TaskCard key = {task.id } task = {task} tasks = {tasks} deleteTask = {()=> deleteTask(task.id)} openModel ={() => openModal(task)} showEditTask ={()=> showEditTask(task)} openTaskDetail={openTaskDetail} /> ) }
      {/* list */}
    </div>
  );
}

export default TaskListItem;
