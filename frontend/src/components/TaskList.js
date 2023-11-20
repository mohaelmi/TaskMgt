import React, { useEffect, useState } from 'react';
import TaskListItem from './taskListItem';

// import axios from 'axios';

function TaskList(props) {
  const [todos, setTodos] = useState([]);
  const [progress, setProgress] = useState([]);
  const [done, setDone] = useState([]);
  // console.log(props.tasks);

  useEffect(() => {
    const tasksTodo = props.tasks.filter((task) => task.status === 'Todo');
    const tasksInProgress = props.tasks.filter((task) => task.status === 'In Progress');
    const closedTasks = props.tasks.filter((task) => task.status === 'Closed');

    setTodos(tasksTodo);
    setProgress(tasksInProgress);
    setDone(closedTasks);
  }, [props.tasks]);

  const statuses = ['up_coming', 'progress', 'done'];

  // const renderTasks = () => {
  //   return statuses?.map((status, index) => (
  //     <TaskListItemm
  //       // key={task.id}
  //       // task={task}
  //       // delete = {()=> props.deleteTask(task.id)}
  //       key={index}
  //       status={status}
  //     />
  //   ));
  // };

  return (
    <div className='flex gap-16'>
      {statuses?.map((status, index) => (
        <TaskListItem
          key={index}
          status={status}
          tasks={props.tasks}
          todos={todos}
          inprogress={progress}
          done={done}
          deleteTask={props.deleteTask}
          openModal={props.openModal}
          // showEditTask = {props.showEditTask} // maybe use it post edited task
        />
      ))}
    </div>
  );

  //<ul>{renderTasks()}</ul>;
}

export default TaskList;
