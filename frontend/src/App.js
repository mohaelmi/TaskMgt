import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from "./hooks/useApplicationData";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const [state, createTask, handleDeleteTask] = useApplicationData();


  return (
    <>
    <Toaster />
      <div className="bg-slate-200 w-screen h-screen flex flex-col items-center pt-32 gap-16">
        <NewTask createTask={createTask} />
        <p>tasklist is below</p>
        <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

export default App;
