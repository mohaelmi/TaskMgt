import React, { useState } from "react";

function EditTask({ taskId, taskToEdit }) {
  // console.log("task to edit", taskToEdit);
  const [task, setTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements
    setTask({...task, title: title.value, description: description.value})
    console.log("updated task", task);
  };

  // console.log("task", task);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        name="title"
        value={taskToEdit.title}
        // onChange={(e) => setTask({...task, title: e.target.value})}
      />
      <input
        type="text"
        className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        name="description"
        value={taskToEdit.description}
        // onChange={(e) => setTask({...task, description: e.target.value})}
      />
      <button
        type="submit"
        className="bg-cyan-500 rounded-md px-4 h-12 text-white"
      >
        EDIT
      </button>
    </form>
    // <div>{taskId}</div>
  );
}

export default EditTask;
