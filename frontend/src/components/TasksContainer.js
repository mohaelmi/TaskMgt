import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import EditTask from './EditTask';
import CreateTask from './CreateTask';
import TaskDetailsModal from './TaskDetailsModal';
import AlertDialogSlide from "./Dialog";


function TasksContainer({
  state,
  createTask,
  handleDeleteTask,
  updatedTask,
  toggleModal,
  createToggleModal,
  // userLogin,
  // userLogOut,
  // userSignup,
  moveTask,
  detailsToggleModal,
  // timeDifference,
  notificationState,
  notificationElement,
  toggleNotification
 }) {

  
   console.log(notificationState);

  return (
    <>
    {state.user ? (
      <div className='bg-slate-100 w-9/12 flex flex-col justify-center items-center pt-32 pb-10 mx-auto gap-16 rounded-md'>

        {notificationState && <AlertDialogSlide  toggleNotification={toggleNotification} notificationState={notificationState} notificationElement={notificationElement} /> }
        {state.showDetailsModal && (
          <TaskDetailsModal
            closeTaskDetails={detailsToggleModal}
            taskDetails={state.taskDetails}
          />
        )}
        {state.showCreateModal && (
          <CreateTask
            closeModal={createToggleModal}
            createTask={createTask}
          />
        )}
        <TaskList
          tasks={state.taskData}
          deleteTask={handleDeleteTask}
          openModal={toggleModal}
          moveTask={moveTask}
          openTaskDetail={detailsToggleModal}
        />

        {state.showModal && (
          <EditTask
            taskToEdit={state.taskToEdit}
            closeModal={toggleModal}
            updateTask={updatedTask}
          />
        )}
      </div>
    ) : null}
    </>
  )
}

export default TasksContainer