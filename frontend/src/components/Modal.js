import React, { useState, useEffect } from "react";

function Modal({ task, callback, closeModal, text, title }) {

  //set empty object to task if there is no task property coming from EditTask component 
  if (!task || task === undefined) {
    task = {};
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, start_time, duration, category, imortancelevel } = e.target.elements;
    const startTime = start_time ? start_time.value : task.estimatedstarttime

  

    if (Object.keys(task).length > 0) {
    
      const updatedTask = {
        ...task,
        title: title.value,
        description: description.value,
        duration: duration.value,
        category: category.value,
        estimatedstarttime: startTime,
        importancelevel: imortancelevel.value,
      };
      console.log("## taskToEdit", updatedTask);
      callback(updatedTask);
    } else {

      const newTask = {
        title: title.value, 
        category:  category.value,  
        description: description.value,
        status: "Todo",
        importancelevel: imortancelevel.value, 
        duration: duration.value, 
        estimatedstarttime: start_time.value, 
        actualstarttime: null,
        actualendtime: null,
      };

      // if not task then means user clicked create Task buton so will create new task
      console.log("NEW task", task);
      callback(newTask);
      closeModal(null);
    }

  };

  return (
    <div className="flex justify-center items-center  overflow-x-hidden round-lg overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none mt-12">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relativ rounded-md shadow dark:bg-gray-200">
          <button
            onClick={() => closeModal(null)}
            type="button"
            className="absolute  end-5 top-5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
         
          </button>
          <div className="p-4 md:p-5 text-center bg-slate-600 rounded-lg w-full">
            {/* content starts here */}
            <h1 className="text-gray-100 font-bold text-lg " >{title}</h1>
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

              
                />
              </div>
              <div>
                <label
                  className="text-white text-sm font-bold mb-2 mr-6"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  rows={2}
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-5 h-16 w-64 px-1"
                  name="description"
                  defaultValue={task.description}
        
                />
              </div>

              <div>
                <label
                  className="text-white text-sm font-bold mb-2 mr-10"
                  htmlFor="duration"
                >
                Duration
                </label>
                <input
                  type="text"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-5 h-10 w-64 px-1"
                  name="duration"
                  placeholder="Duration in minutes"
                  defaultValue={task.duration}
       
                />
              </div>


              
              {/* dropdown */}
              <div className="text-gray-800">
                <label
                  className="text-white text-sm font-bold mb-2 -ml-5 mr-8"
                  htmlFor="importancelevel"
                >
                Importance
                </label>
                <select name="imortancelevel" className=" border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-64 px-1 cursor-pointer">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* dropdown */}
              <div className="text-gray-800">
                <label
                  className="text-white text-sm font-bold mb-2 mr-10"
                  htmlFor="duration"
                >
                  Category
                </label>
                <select name="category" className=" border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1 cursor-pointer" >
                  <option value="Leisure">Leisure</option>
                  <option value="House Chores">House Chores</option>
                  <option value="Self Improvement">Self development</option>
                </select>
              </div>


            
            { (task.status === 'Todo' || Object.keys(task).length === 0 ) &&

              <div>
                <label
                  className="text-white text-sm font-bold mb-2 -ml-5 mr-9"
                  htmlFor="start_level"
                >
                  Start time
                </label>
                <input
                  type="time"
                  className=" border-2 border-slate-400 bg-slate-100 rounded-md h-10 w-64 px-1"
                  name="start_time"
                  defaultValue={task.estimatedstarttime}
      
                />
              </div> 
              }
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
