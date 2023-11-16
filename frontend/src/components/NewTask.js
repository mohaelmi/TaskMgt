import axios from "axios";
import React, { useState } from "react";
import { uid } from "uid";

function NewTask({createTask}) {
  // const [task, setTask] = useState({
  //   id: "",
  //   name: "",
  //   status: "active", //can also be in progress or closed
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements)
    const { title } = e.target.elements

    const task = {
      userId: 6,
      title:      title.value, 
      description: "details for the task", 
      start_time:      "1:20pm",   
      duration:    "80 minutes",
      importance_level: "low" 
    }

    createTask(task)

  };

  // console.log("tasks", task);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        name = "title"
        // value={task.name}
        // onChange={(e) => setTask({ ...task, id: uid(), name: e.target.value })}
      />
      <button type="submit" className="bg-cyan-500 rounded-md px-4 h-12 text-white"> 
        Add
      </button>

    </form>
  );
}

export default NewTask;
