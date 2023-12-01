import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from './hooks/useApplicationData';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import CreateTask from './components/CreateTask';
import TaskDetailsModal from './components/TaskDetailsModal';
import NavBar from './components/NavBar';
import { NotificationsContent } from './components/Notifications';



function App() {
  const [
    state,
    createTask,
    handleDeleteTask,
    updateTask,
    toggleModal,
    createToggleModal,
    userLogin,
    userLogOut,
    userSignup,
    moveTask,
    detailsToggleModal,
  ] = useApplicationData();
  //geting data for pie charts
  const { taskCategoryPie, taskStatusPie } = state;
  const [notificationState, setNotificationState] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <NavBar
        openModal={createToggleModal}
        userLogin={userLogin}
        userLogOut={userLogOut}
        userSignup={userSignup}
        user={state.user}
        taskCategoryPie={taskCategoryPie}
        taskStatusPie={taskStatusPie}
        toggleNotification={setNotificationState} 
        notificationState={notificationState}
      />

      {state.user ? (
        <div className='bg-slate-100 w-9/12 flex flex-col justify-center items-center pt-32 pb-10 mx-auto gap-16 rounded-md'>
          {notificationState && <NotificationsContent tasks={state.taskData} /> }
          {state.showDetailsModal && (
            <TaskDetailsModal
              closeTaskDetails={detailsToggleModal}
              taskDetails={state.taskDetails}
            />
          )}
          {/* <NewTask createTask={createTask} /> */}
          {/* <p>tasklist is below</p> */}
          {/* <TaskList tasks={state.taskData} deleteTask={handleDeleteTask} /> */}
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
              updateTask={updateTask}
            />
          )}
        </div>
      ) : null}
    </DndProvider>
  );
}

export default App;
