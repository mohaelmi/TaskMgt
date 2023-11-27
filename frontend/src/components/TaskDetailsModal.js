import React, { useState, useEffect } from "react";

function TaskDetailsModal({closeTaskDetails}) {
  //  description: {task.description}
  //   actual start time: {task.actualstarttime}
  //   acutal start time: {task.actualendtime}
  //   category: {task.category}
  //   duadate: {task.duedate}
  //   estimated Start Time: {task.estimatedstarttime}
  //   estimated End Time: {task.estimatedendtime}

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
          <div className="p-4 md:p-5 text-center">
            {/* content starts here */}
            <form className="flex flex-col gap-5 mt-10">
              <div className="">
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-16"
                >
                  Title
                </label>
                
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-5"
                >
                  Description
                </label>
                
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm font-bold mb-2 mr-6"
                >
                  Start time
                </label>
                

               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
