import './App.css';
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import { useApplicationData } from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import { NotificationsContent } from './components/Notifications';

import TasksContainer from './components/TasksContainer';


function App() {
  const data = useApplicationData();
 
  let counter = 0;
  const [notificationState, setNotificationState] = useState(false);

  const notificationElement = data.state.taskData.filter(task => task.status === 'Todo') .map((task, idx) => {
    if(data.timeDifference(task) > 0 && data.timeDifference(task) < 5) {
      counter++
      // return <AlertDialogSlide  toggleNotification={setNotificationState} notificationState={notificationState} key={idx} task={task} timeDifference={data.timeDifference(task) } />
      return <NotificationsContent key={idx} task={task} timeDifference={data.timeDifference(task) } />
    }
  })
  

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <NavBar
        openModal={data.createToggleModal}
        userLogin={data.userLogin}
        userLogOut={data.userLogOut}
        userSignup={data.userSignup}
        user={data.state.user}
        taskCategoryPie={data.state.taskCategoryPie}
        taskStatusPie={data.state.taskStatusPie}
        tasktimelineData={data.state.tasktimelineData}
        toggleNotification={setNotificationState} 
        notificationState={notificationState}
        countNotification={counter}
      />

      <TasksContainer {...data } notificationState ={notificationState} toggleNotification={setNotificationState}  notificationElement={notificationElement} />
    </DndProvider>
  );
}

export default App;
