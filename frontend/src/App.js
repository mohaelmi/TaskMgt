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


const notificationData = [
  {
    type: "reminder",
    message: 'Task "Complete Project Proposal" will start within 1 minute.'
  },
  {
    type: "reminder",
    message: 'Task "Read a Book" will start within an 5 minutes'
  },
  {
    type: "reminder",
    message: 'Task "Cooking experiment" will start within 3 minutes.'
  },
];


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
  const [notificationState, setNotificationState] = useState(false);

  const notificationElement = notificationData.map((notification, idx) => {
    return <NotificationsContent key={idx} notification={notification} />
  })

  console.log(notificationElement);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <NavBar
        openModal={createToggleModal}
        userLogin={userLogin}
        userLogOut={userLogOut}
        userSignup={userSignup}
        user={state.user}
        taskCategoryPie={state.taskCategoryPie}
        taskStatusPie={state.taskStatusPie}
        tasktimelineData={state.tasktimelineData}
        toggleNotification={setNotificationState} 
        notificationState={notificationState}
        countNotification={notificationData.length}
      />

      {state.user ? (
        <div className='bg-slate-100 w-9/12 flex flex-col justify-center items-center pt-32 pb-10 mx-auto gap-16 rounded-md'>
          <h1 className='text-lg font-bold'>test Notifications</h1> 
          {notificationState && notificationElement }
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
