import React, { useState, useEffect } from "react";

function TaskDetailsModal({closeTaskDetails, taskDetails}) {
  //  description: {task.description}
  //   actual start time: {task.actualstarttime}
  //   acutal start time: {task.actualendtime}
  //   category: {task.category}
  //   duadate: {task.duedate}
  //   estimated Start Time: {task.estimatedstarttime}
  //   estimated End Time: {task.estimatedendtime}

  function getTime(time) {
    // time = time.split(':');
    let now = new Date();
    return new Date(now.getHours(), now.getMinutes(), now.getSeconds());
  }
  // console.log(getDateFromHours(taskDetails.estimatedstarttime));


  // const diff = Math.abs((start/1000) - Number(taskDetails.duration))
  // console.log(start, diff);

  let start_time = new Date().getTime(taskDetails.estimatedstarttime)
  let diff = Math.abs( Date.now() - start_time)
  console.log(diff);
  console.log("time now : ", new Date().toLocaleTimeString());
  console.log("start time :",  taskDetails.estimatedstarttime);

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
          onClick={() => closeTaskDetails()}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <div className="md:p-2 flex flex-col -mt-24 text-gray-700">
            {/* content starts here */}
          
             
                <label className="px-8 p-5 text-md font-bold ">
                  <p className="font-light">Description:</p> {taskDetails.description}
                </label>
                
           
              
                <label className="px-8 p-5 text-md font-bold ">
                  <p className="font-light">Category:</p> {taskDetails.category}
                </label>
                
             
            
                <label className="px-8 p-5 text-md font-bold">
                  <p className="font-light">Start time:</p> {taskDetails.estimatedstarttime}
                </label>
                

               
            
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
