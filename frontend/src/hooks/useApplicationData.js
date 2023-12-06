import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ACTIONS = {
  SET_TASK_DATA: "SET_PHOTO_DATA",
  DELETE_TASK: "DELETE_TASK",
  CREAT_TASK: "CREATE_TASK",
  SHOW_EDIT_TASK: "SHOW_EDIT_TASK",
  SELECT_TASK: "SELECT_TASK",
  SHOW_MODAL_CREATE_TASK: "SHOW_MODAL_CREATE_TASK",
  EDIT_TASK: "EDIT_TASK",
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
  MOVE_TASK_INTO_PROGRESS: "MOVE_TASK_INTO_PROGRESS",
  SHOW_MODAL_DETAIL_TASK: "SHOW_MODAL_DETAIL_TASK",
  SET_CATEGORY_COUNTS: "SET_CATEGORY_COUNTS", //piechart category
  SET_STATUS_COUNTS: "SET_STATUS_COUNTS",//piechart1 status
  SET_TASK_TIMELINE:"SET_TASK_TIMELINE",// timeline chart
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TASK_DATA:
      return {
        ...state,
        taskData: action.payload,
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        taskData: action.payload,
      };

    case ACTIONS.SELECT_TASK:
      return {
        ...state,
        showModal: action.payload,
      };

    case ACTIONS.EDIT_TASK:
      return {
        ...state,
        showModal: null,
      };
    // //  console.log("payload", action.payload)
    // //  console.log("state", state.taskData)

    //  const found = state.taskData.find((task) => task.id === action.payload.id)
    //  const tasks = state.taskData.filter((task) => {
    //   if(task.id === found.id) {
    //     return found
    //   }
    //   return task
    //  })
    // //  console.log("## updated tasks", tasks);
    //   return {
    //     ...state,
    //     taskData: tasks,
    //   };

    case ACTIONS.SHOW_MODAL_CREATE_TASK:
      return {
        ...state,
        showCreateModal: !state.showCreateModal,
      };

    case ACTIONS.SHOW_EDIT_TASK:
      if (!action.payload) {
        return {
          ...state,
          showModal: false,
          taskToEdit: {},
        };
      }

      // for first time action being triggered set showModal id and taskToEdit to paylaod
      return {
        ...state,
        showModal: action.payload.id,
        taskToEdit: action.payload,
      };

    case ACTIONS.SHOW_MODAL_DETAIL_TASK:
      return {
        ...state,
        taskDetails: action.payload,
        showDetailsModal: !state.showDetailsModal,
      };

    case ACTIONS.USER_LOGIN:
      console.log("user data", action.payload);

      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.USER_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

    // case ACTIONS.MOVE_TASK_INTO_PROGRESS:
      
    // const filteredTasks = state.taskData.filter(task => task.id !== action.payload.id)
    // console.log(filteredTasks);
    // const newTaskData = [...filteredTasks, {...action.payload} ]


    //   return {
    //     ...state,
    //     taskData: newTaskData,
    //   };
      //pie chart 1
      case ACTIONS.SET_CATEGORY_COUNTS:
        return {
          ...state,
          taskCategoryPie: action.payload,
        };
      //pie chart 2
      case ACTIONS.SET_STATUS_COUNTS:
        return {
          ...state,
          taskStatusPie: action.payload,
        };
      case ACTIONS.SET_TASK_TIMELINE:
        return {
          ...state,
          tasktimelineData: action.payload,
        };
  

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
//function to calculate category counts(pie chart 1)
const calculateCategoryCounts = (tasks) => {
  const categoryCounts = {};
  tasks.forEach((task) => {
    categoryCounts[task.category] = (categoryCounts[task.category] || 0) + 1;
  });
  return categoryCounts;
};

//function to calculate status counts(pie chart 2)
const calculateStatusCounts = (tasks) => {
  const statusCounts = {};
  tasks.forEach((task) => {
    statusCounts[task.status] = (statusCounts[task.status] || 0) + 1;
  });
  return statusCounts;
};
//function to get timeline data(Timeline chart 3):
// Function to calculate EstimatedEndTime
const calculateEstimatedEndTime = (startTime, duration) => {
  const [hours, minutes, seconds] = startTime.split(':').map(Number);
  const start = new Date().setHours(hours, minutes, seconds);

  const endTime = new Date(start + duration * 60000);
  const formattedEndTime = endTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return formattedEndTime;
};
const creatTimelineData = (tasks) => {
  return tasks.map((task) => {
    return {
      id: task.id.toString(),
      title: task.title,
      category: task.category,
      estimatedstarttime: task.estimatedstarttime,
      estimatedendtime: calculateEstimatedEndTime(task.estimatedstarttime,parseInt(task.duration, 10)), // Convert duration to a number if it's a string
    };
  });
};


export const useApplicationData = () => {
  const userInfo = localStorage.getItem("user");
  let user = null;
  if (userInfo) {
    user = JSON.parse(userInfo);
  }

  // console.log(typeof JSON.parse(userInfo));
  const initialState = {
    taskData: [],
    taskToEdit: {},
    taskDetails: {},
    taskStatusPie:{}, //pie 2
    taskCategoryPie:{}, //pie 1
    tasktimelineData:{},//timeline
    showModal: false,
    showCreateModal: false,
    showDetailsModal: false,
    user: user,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  const fetchTasks = () => {
    axios
      .get("/api/tasks")
      .then((res) => {
        console.log("data related to user ", res.data);
        if (res.data.emptyUser === 'no user signed') {
          navigate("/login");
        } else {
          dispatch({ type: ACTIONS.SET_TASK_DATA, payload: res.data });
          

          // calculate counts for categories and statuses and timeline
          const categoryCounts = calculateCategoryCounts(res.data);
          const statusCounts = calculateStatusCounts(res.data);
          const tasktimelineData = creatTimelineData(res.data);
          // console.log('fetch',tasktimelineData);
          dispatch({ type: ACTIONS.SET_CATEGORY_COUNTS, payload: categoryCounts });
          dispatch({ type: ACTIONS.SET_STATUS_COUNTS, payload: statusCounts });
          dispatch({ type: ACTIONS.SET_TASK_TIMELINE, payload: tasktimelineData });
          // console.log('dispatch',tasktimelineData);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, [state.user]);

  const createTask = (task) => {
    console.log("create task", task);
    axios
      .post("/api/tasks/new", task)
      .then((res) => {
        // dispatch({ type: ACTIONS.CREAT_TASK, payload:  task}); // set update data from server  ) });
        fetchTasks();
        toast.success(res.data.message, { icon: "✅" });
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id) => {
    axios
      .post(`/api/tasks/delete/`, {taskId: id})
      .then((res) => {
        // dispatch({ type: ACTIONS.DELETE_TASK, payload: res.data.tasks });
        fetchTasks();
        toast.success(res.data.message, { icon: "❌" });
      })
      .catch((error) => console.log(error));
  };

  const updatedTask = (task) => {
    console.log("updated task", task);
    axios
      .post(`/api/tasks/edit`, task)
      .then((res) => {
        dispatch({ type: ACTIONS.EDIT_TASK });
        toast.success(res.data.message);
        fetchTasks();
        console.log("-- edited task", res.data);
      })
      .catch((error) => console.log(error));
  };

  const toggleModal = (task) => {
    // state.showModal = id;
    dispatch({
      type: ACTIONS.SHOW_EDIT_TASK,
      payload: task,
    });
  };

  const createToggleModal = () => {
    dispatch({ type: ACTIONS.SHOW_MODAL_CREATE_TASK });
  };

  const detailsToggleModal = (task) => {
    dispatch({ type: ACTIONS.SHOW_MODAL_DETAIL_TASK, payload: task });
  };


  const userLogin = (email, password) => {
    axios
      .post("/login", { email, password })
      .then((res) => {
        console.log("## user", res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        // const user = localStorage.getItem("user_id");
        dispatch({ type: ACTIONS.USER_LOGIN, payload: res.data.user });
        navigate("/");
        console.log("response when login", res.data.user);
        // console.log("local storage", user);
      })

      .catch((error) => {
        navigate("/login");
        toast.error(error.response.data.message, { duration: 3000 });
        console.log(error.response.data);
      });
  };

  const userSignup = (userInfo) => {
    // const { username, email, pwd } = userInfo;
    console.log(userInfo);
    axios
      .post("/register", userInfo)
      .then((res) => {
        console.log(res.data.newUser);
        localStorage.setItem("user", JSON.stringify(res.data.newUser));
        dispatch({ type: ACTIONS.USER_LOGIN, payload: res.data.newUser });
        navigate("/");
        // dispatch({ type: ACTIONS.USER_SIGNUP, payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  const userLogOut = () => {
    axios
      .get("/logout")
      .then((res) => {
        dispatch({ type: ACTIONS.USER_LOGOUT, payload: null });
        localStorage.setItem("user", null);
        navigate("/login");
        // console.log("response when login", res.data.user)
        console.log("log out", res.data);
      })
      .catch((error) => console.log(error));
  };

  const moveTask = (id, prevStatus, status) => {
    console.log('prev status', prevStatus);
    console.log('status',  status);

    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`

    if(prevStatus === 'Todo' && status === 'Closed') {
      toast.error('please start working on the task before you finish it or just delete it'.toUpperCase(), { icon: "😕" })
      return;
    }
    if(prevStatus !== status) {
      // console.log('sdddddddddddddddd');
    if(status === 'In Progress') {
      if(prevStatus === 'Todo') {
        axios
        .post("/api/tasks/setStartTime", {taskId: id,  status, time})
        .then((res) => {
          fetchTasks()
          console.log("task:", res.data.task);
          // dispatch({ type: ACTIONS.MOVE_TASK_INTO_PROGRESS, payload: res.data.task });
          toast.success(res.data.message)
        })
        .catch((error) => console.log(error));

      }else if(prevStatus === 'Closed'){
        console.log('wwwwwwwww');
        axios
        .post("/api/tasks/setEndTimeToNull", {taskId: id,  status})
        .then((res) => {
          fetchTasks()
          console.log("task:", res.data.message);
          toast.success(res.data.message)
        })
        .catch((error) => console.log(error));
      }
    }else if(status === 'Closed') {
      axios
      .post("/api/tasks/setEndTime", {taskId: id,  status, time})
      .then((res) => {
        fetchTasks()
        console.log("task:", res.data.message);
        toast.success(res.data.message)
      })
      .catch((error) => console.log(error));
    }else {
      axios
      .post("/api/tasks/startAgain", {taskId: id,  status})
      .then((res) => {
        fetchTasks()
        console.log("task:", res.data.message);
        toast.success(res.data.message)
      })
      .catch((error) => console.log(error));
    }
  }

  };


  // return difference from estimated start time and actual system for alert
  const timeDifference = (task) => {
    // console.log(length);
    // gett entire date
    function getDateFromTime(time) {
      time = time.split(':');
      let now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
    }
    
    // dispatch({ type: ACTIONS.SET_ALERT_LENGTH, payload: length });
    
    const stimatedTimeInMilliseconds = new Date(getDateFromTime(task.estimatedstarttime)).getTime()
    const currentTime = new Date().getTime() 
    const diff = (((stimatedTimeInMilliseconds - currentTime)/1000)/60).toFixed(0)
    return diff <= 5 ? diff : null
  }

  return {
    state,
    createTask,
    handleDeleteTask,
    updatedTask,
    toggleModal,
    createToggleModal,
    userLogin,
    userLogOut,
    userSignup,
    moveTask,
    detailsToggleModal, 
    timeDifference
  };
};
