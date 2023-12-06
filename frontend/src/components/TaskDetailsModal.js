import React, { useState, useEffect } from "react";
import moment from 'moment';

function TaskDetailsModal({closeTaskDetails, taskDetails}) {


  function getDateFromHours(time) {
    time = time.split(':');
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
  }

const startTime = taskDetails.actualstarttime ? taskDetails.actualstarttime : taskDetails.estimatedstarttime;

 const start = moment(getDateFromHours(startTime)).fromNow();

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-10">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow dark:bg-gray-700">
          <button
          onClick={() => closeTaskDetails()}
            type="button"
            className="absolute top-3 end-2.5 text-gray-400  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <div className="md:p-2 flex flex-col -mt-24 text-slate-200  bg-slate-600 rounded-lg justify-center gap-6 ">
          <h1 className="text-lg font-bold text-center mt-5"> Task Details</h1>
        
             
                <label className="px-8 pt-3 text-md font-bold flex flex-col gap-4 bg-slate-800 pb-3 rounded-lg">
                  <p className="font-bold">Description</p>  {taskDetails.description}
                </label>
                
           
              
                <label className="px-8 pt-3 text-md font-bold flex flex-row items-center justify-between bg-slate-800 pb-3 rounded-lg">
                  <p className="font-bold">Category</p> {taskDetails.category}
                </label>
                
             
            
                <label className="px-8 pt-3 text-md font-bold flex flex-row items-center justify-between bg-slate-800 pb-3 rounded-lg">
                  <p className="font-bold">Start time</p> {start}
                </label>

                <label className="px-8 pt-3 text-md font-bold flex flex-row items-center justify-between bg-slate-800 pb-3 rounded-lg mb-5">
                  <p className="font-bold">Duration</p> {taskDetails.duration} minutes
                </label>
                

               
            
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
