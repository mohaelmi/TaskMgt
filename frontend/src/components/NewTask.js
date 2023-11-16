import toast from "react-hot-toast"
import React, { useState } from "react";
import toast from "react-hot-toast";
import { uid } from "uid";

function NewTask({createTask}) {


  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = e.target.elements

    if(!title.value) {
      return toast.error("please insert valid task!");
    }
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
