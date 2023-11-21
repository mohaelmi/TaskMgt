import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from './hooks/useApplicationData';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import Header from './components/Header';
import CreateTask from './pages/CreateTask';

function App() {
  const [state, createTask, handleDeleteTask, updateTask, toggleModal, createToggleModal] = useApplicationData();

  // console.log("## show model", state.showCreateModal)

  return (
    <>
      <Toaster />
      <Header  />
      <div className="bg-slate-100 w-9/12 flex flex-col justify-center items-center pt-32 pb-10 mx-auto gap-16 rounded-md">
        {/* <NewTask createTask={createTask} /> */}
        {/* <p>tasklist is below</p> */}
        {/* <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} /> */}
        {state.showCreateModal && <CreateTask  closeModal = {createToggleModal} createTask={createTask} /> }
        <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} openModal = {toggleModal}  />
        {state.showModal && <EditTask taskToEdit = {state.taskToEdit} closeModal= {toggleModal}  updateTask = {updateTask}/> }
      </div>
    </>
  );
}

export default App;
