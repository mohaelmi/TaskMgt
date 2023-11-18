import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from './hooks/useApplicationData';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import NavBar from './components/Header';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('/api/tasks/')
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteTask = (id) => {
    axios
      .get(`/api/tasks/delete/${id}`)
      .then((res) => {
        console.log(res.data.tasksData);
        setTasks(res.data.tasksData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='App'>
      <Header />
      {/* <TaskList tasks={tasks} deleteTask={handleDeleteTask} /> */}
    </div>
  );
}

export default App;
