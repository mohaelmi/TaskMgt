import React, { useEffect, useState } from "react";

function EditTask({ taskId, taskToEdit }) {
  // console.log("task to edit", taskToEdit);
  const [task, setTask] = useState(taskToEdit);

  useEffect(() => {
    setTask(taskToEdit);
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { title, description } = e.target.elements
    // setTask({...task, title: title.value, description: description.value})
    console.log("updated title", task.title);
    console.log("updated description", task.description);
  };

  // console.log("task", task);
  // console.log(taskToEdit);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="">
      <label class="text-gray-700 text-sm font-bold mb-2 mr-16" for="title">
        Title
      </label>
      <input
        type="text"
        className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        name="title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      </div>
      <div>
      <label class="text-gray-700 text-sm font-bold mb-2 mr-5" for="description">
        Description
      </label>
      <input
        type="text"
        className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
        name="description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      </div>
      <div>
      <label class="text-gray-700 text-sm font-bold mb-2 mr-6" for="start_level">
        Start Level
      </label>
      <input
        type="text"
        className=" border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-64 px-1"
        name="start_level"
        value={task.importance_level}
        onChange={(e) => setTask({ ...task, importance_level: e.target.value })}
      />
      </div>
      <div className="flex items-center justify-end mr-3" >
      <button
        type="submit"
        className="bg-cyan-500 rounded-md px-4 h-12 text-white w-4/12 "
      >
        EDIT
      </button>
      </div>
    </form>
    // <div>{taskId}</div>
  );
}

export default EditTask;
