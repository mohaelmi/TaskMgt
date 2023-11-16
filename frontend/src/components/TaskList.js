import React, { useEffect, useState } from 'react'
import TaskListItem from './TaskListItem'
// import axios from 'axios';


function TaskList(props) {

  const renderTasks = () => {
    return props.tasks?.map(task => (
        
      <TaskListItem
        key={task.id}
        task={task}
        delete = {()=> props.deleteTask(task.id)}
      />
    ));
  }

  console.log(renderTasks());
  
  return (
    <section className="vh-100" style={{backgroundColor: "#eee"}}>
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
  </section>
  );
  
  
  
  //<ul>{renderTasks()}</ul>;
}

export default TaskList