import "./App.css";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import { useApplicationData } from "./hooks/useApplicationData";
import NavBar from "./components/NavBar";
import TasksContainer from "./components/TasksContainer";
import NotificationListItem from "./components/NotificationListItem";

function App() {
  const data = useApplicationData();

  const [notificationState, setNotificationState] = useState(false);
  // const [counter, setCounter] = useState(0);
  let counter = 0;

  // check data.timeDifference(task) with settinh counter state every 5 seconds to update alert counter -> but alert number is blinking -> if you can fix go ahead!
  
  // useEffect(() => {
  //   const interVal = setInterval(() => {
  //     const notificationCount = data.state.taskData.filter((task) => {
  //     return task.status === 'Todo' && data.timeDifference(task) > 0 && data.timeDifference(task) < 5
  //     }).length

  //     if(counter < notificationCount){
  //       setCounter(notificationCount)
  //     }

  //     console.log(notificationCount, counter);
  //   if(notificationCount === 0  ) clearInterval(interVal)
  //   }, 5000)

  // }, [data.state.taskData, counter])



  // loop only Todo task
  const notificationElement = data.state.taskData
    .filter((task) => task.status === "Todo")
    .map((task, idx) => {
      if (data.timeDifference(task) > 0 && data.timeDifference(task) < 5) {
        counter++;
        return (
          <NotificationListItem
            key={idx}
            task={task}
            timeDifference={data.timeDifference(task)}
          />
        );
      }
    });

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

      <TasksContainer
        {...data}
        notificationState={notificationState}
        toggleNotification={setNotificationState}
        notificationElement={notificationElement}
      />
    </DndProvider>
  );
}

export default App;
