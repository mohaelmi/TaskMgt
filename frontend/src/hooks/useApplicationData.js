import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { calculateCategoryCounts, calculateStatusCounts,  creatTimelineData} from "../Helpers/chartsHelper"
import { timeDifference } from '../Helpers/taskHelper'

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
  
    case ACTIONS.SHOW_MODAL_CREATE_TASK:
      return {
        ...state,
        showCreateModal: action.payload
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

      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.USER_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

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



export const useApplicationData = () => {
  const userInfo = localStorage.getItem("user");
  let user = null;
  if (userInfo) {
    user = JSON.parse(userInfo);
  }

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
        if (res.data.emptyUser === 'no user signed') {
          navigate("/login");
        } else {
          dispatch({ type: ACTIONS.SET_TASK_DATA, payload: res.data });
          

          // calculate counts for categories and statuses and timeline
          const categoryCounts = calculateCategoryCounts(res.data);
          const statusCounts = calculateStatusCounts(res.data);
          const tasktimelineData = creatTimelineData(res.data);

          dispatch({ type: ACTIONS.SET_CATEGORY_COUNTS, payload: categoryCounts });
          dispatch({ type: ACTIONS.SET_STATUS_COUNTS, payload: statusCounts });
          dispatch({ type: ACTIONS.SET_TASK_TIMELINE, payload: tasktimelineData });
  
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, [state.user]);

  const createTask = (task) => {
    axios
      .post("/api/tasks/new", task)
      .then((res) => {
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
    axios
      .post(`/api/tasks/edit`, task)
      .then((res) => {
        dispatch({ type: ACTIONS.EDIT_TASK });
        toast.success(res.data.message);
        fetchTasks();
      })
      .catch((error) => console.log(error));
  };

  const toggleModal = (task) => {
    dispatch({
      type: ACTIONS.SHOW_EDIT_TASK,
      payload: task,
    });
  };

  const createToggleModal = (value) => {
    dispatch({ type: ACTIONS.SHOW_MODAL_CREATE_TASK, payload: value });
  };

  const detailsToggleModal = (task) => {
    dispatch({ type: ACTIONS.SHOW_MODAL_DETAIL_TASK, payload: task });
  };


  const userLogin = (email, password) => {
    axios
      .post("/login", { email, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({ type: ACTIONS.USER_LOGIN, payload: res.data.user });
        navigate("/");
      })

      .catch((error) => {
        navigate("/login");
        toast.error(error.response.data.message, { duration: 3000 });
      });
  };

  const userSignup = (userInfo) => {
    axios
      .post("/register", userInfo)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.newUser));
        dispatch({ type: ACTIONS.USER_LOGIN, payload: res.data.newUser });
        navigate("/");
      
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
      })
      .catch((error) => console.log(error));
  };


  // drag and drop tasks
  const moveTask = (id, prevStatus, status) => {

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
 
    if(status === 'In Progress') {
      if(prevStatus === 'Todo') {
        axios
        .post("/api/tasks/setStartTime", {taskId: id,  status, time})
        .then((res) => {
          fetchTasks()
          toast.success(res.data.message)
        })
        .catch((error) => console.log(error));

      }else if(prevStatus === 'Closed'){
        axios
        .post("/api/tasks/setEndTimeToNull", {taskId: id,  status})
        .then((res) => {
          fetchTasks()
          toast.success(res.data.message)
        })
        .catch((error) => console.log(error));
      }
    }else if(status === 'Closed') {
      axios
      .post("/api/tasks/setEndTime", {taskId: id,  status, time})
      .then((res) => {
        fetchTasks()
        toast.success(res.data.message)
      })
      .catch((error) => console.log(error));
    }else {
      axios
      .post("/api/tasks/startAgain", {taskId: id,  status})
      .then((res) => {
        fetchTasks()
        toast.success(res.data.message)
      })
      .catch((error) => console.log(error));
    }
  }

  };




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
    timeDifference,
    fetchTasks
  };
};

