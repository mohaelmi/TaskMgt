import "./App.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TaskList from "./components/TaskList";


function App() {
  
  const [tasks, setTasks ] = useState([])

  useEffect(() => {
  axios.get('/api/tasks/')
  .then(res => {
    setTasks(res.data)
    console.log(res.data);
  })
  .catch(error => console.log(error))
  }, [])

  const handleDeleteTask = (id) => {
  axios.get(`/api/tasks/delete/${id}`)
  .then(res => {
    console.log(res.data.tasksData);
    setTasks(res.data.tasksData)
  })
  .catch( error => console.log(error))
  }

  return <div className="App"> 
    <h1>final magic app starts here!!</h1>
  
    <TaskList  tasks = {tasks}  deleteTask = {handleDeleteTask}/>
  </div>;
}

export default App;
