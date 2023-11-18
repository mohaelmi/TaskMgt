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
  const [state, createTask, handleDeleteTask, showEditComponent] = useApplicationData();

  // console.log("task app", state.taskToEdit);

  return (
    <div className='App'>
      <Header />
      {/* <TaskList tasks={tasks} deleteTask={handleDeleteTask} /> */}
    </div>
  );
}

export default App;
