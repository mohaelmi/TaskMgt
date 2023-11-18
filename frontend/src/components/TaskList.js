import React, { useEffect, useState } from 'react';
import TaskListItem from './taskListItem';

// import axios from 'axios';

function TaskList(props) {
  const [todos, setTodos] = useState([]);
  const [progress, setin] = useState([]);
  const [done, setDone] = useState([]);
  // console.log(props.tasks);

  useEffect(() => {
    const filteredTodos = props.tasks.filter((task) => task.status === 'todos');
    const filteredin = props.tasks.filter((task) => task.status === 'progress');
    const filteredDone = props.tasks.filter((task) => task.status === 'done');

    setTodos(filteredTodos);
    setin(filteredin);
    setDone(filteredDone);
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
          showEditComponent={props.showEditComponent}
        />
      ))}
    </div>
  );

  //<ul>{renderTasks()}</ul>;
}

export default TaskList;

/* <section className="vh-100" style={{backgroundColor: "#eee"}}>
<div className="container py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-12 col-xl-10">

      <div className="card">
        <div className="card-header p-3">
          <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Task List</h5>
        </div>
        <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>

          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderTasks()}
            
            </tbody>
          </table>

        </div>
        <div className="card-footer text-end p-3">
          <button className="me-2 btn btn-link">Cancel</button>
          <button className="btn btn-primary">Add Task</button>
        </div>
      </div>

    </div>
  </div>
</div>
</section> */
