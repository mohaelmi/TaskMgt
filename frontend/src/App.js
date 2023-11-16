import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = () => {
    axios
      .get("/api/tasks/")
      .then((res) => {
        setTasks(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
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

  const createTask = (task) => {
    console.log(task);

    axios
      .post("/api/tasks/new", task)
      .then((res) => {
        fetchTasks();
        console.log(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <Toaster />
      <div className="bg-slate-200 w-screen h-screen flex flex-col items-center pt-3 gap-16">
        <NewTask createTask={createTask} />
        <p>tasklist is below</p>
        <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

export default App;
