import React, { useState, useEffect } from "react";

function Modal({ task, setTask, callback, closeModal, text, taskToEdit }) {
  if (!task || task === undefined) {
    task = {};
  }
  // console.log("title", task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, task_start } = e.target.elements;
    console.log("updated title", description.value);

    const task = {
      userId: 2,
      title: title.value, //"Play soccer",
      category: "Leisure", // dropdown
      description: description.value,
      status: "Todo", // dropdown
      importancelevel: "Medium", // dropdown
      estimatedstarttime: "15:00:00", //dropdown time
      duration: "20", 
      actualstarttime: null,
      actualendtime: null,
    };

    if (taskToEdit) {
      const updatedTask = {
        ...taskToEdit,
        title: title.value,
        description: description.value,
        estimatedstarttime: task_start.value,
      };
      console.log("## taskToEdit", updatedTask);
      callback(updatedTask);
    } else {
      console.log("NEW task", task);
      callback(task);
      closeModal(null);
    }

    console.log("before update", taskToEdit);
  };


  return (
    <div className="flex justify-center items-center  overflow-x-hidden round-lg overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relativ rounded-md shadow dark:bg-gray-200">
          <button
            onClick={() => closeModal(null)}
            type="button"
            className="absolute  end-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            {/* <span className="sr-only">Close modal</span> */}
          </button>
          <div className="p-4 md:p-5 text-center bg-slate-600 rounded-lg">
            {/* content starts here */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">








              <div className="text-gray-800">
                <label
                  className="text-white text-sm font-bold mb-2 mr-16"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
                  name="title"
                  defaultValue={task.title}

                  // onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
              </div>
              <div>
                <label
                  className="text-white text-sm font-bold mb-2 mr-6"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  type="text"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-14 w-64 px-1"
                  name="description"
                  defaultValue={task.description}
                  // onChange={(e) =>
                  //   setTask({ ...task, description: e.target.value })
                  // }
                />
              </div>
              <div>
                <label
                  className="text-white text-sm font-bold mb-2 mr-7"
                  htmlFor="start_level"
                >
                  Start time
                </label>
                <input
                  type="time"
                  id="task_start"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-64 px-1"
                  name="task_start"
                  defaultValue={task.estimatedstarttime}
                  // onChange={(e) =>
                  //   setTask({ ...task, estimatedStartTime: e.target.value })
                  // }
                />
              </div>
              <div className="flex items-center justify-end mr-3">
                <button
                  type="submit"
                  className="bg-blue-500  rounded-md px-4 h-12 text-white w-4/12"
                >
                  {text}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;




// <div className="">
// <label
//   className="block text-gray-200 text-sm font-bold mb-2 pr-44" for="title"> Title
// </label>
// <input
//   className="shadow appearance-none border rounded-md w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//   type="text"
//   placeholder="Title"
// />
// </div>


// <div className="">
// <label
//   className="block text-gray-200 text-sm font-bold mb-2 pr-32" for="description"> Description
// </label>
// <input
//   className="shadow appearance-none border rounded-md w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
//   type="text"
//   placeholder="description"
// />
// </div>