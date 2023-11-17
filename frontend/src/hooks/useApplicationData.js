import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const ACTIONS = {
  SET_TASK_DATA: "SET_PHOTO_DATA",
  DELETE_TASK: "DELETE_TASK",
  CREAT_TASK: "CREATE_TASK",
  SHOW_EDIT_COMPONENT: "SHOW_EDIT_COMPONENT",
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

      case ACTIONS.CREAT_TASK:
        return {
          ...state,
          taskData: [...state.taskData, action.payload],
        };

    case ACTIONS.SHOW_EDIT_COMPONENT:
      const paylaodIsCurrentTask = action.payload === state.taskToEdit
      // hide edit
      if(paylaodIsCurrentTask) {
        //hide edit component and make taskToEdit in the state null
        return {
          ...state,
          showEdit: false,
          taskToEdit: null,
        };
      }

      if(!paylaodIsCurrentTask && state.taskToEdit !== null) {
        //update edit component and let taskToEdit state stay true
        return {
          ...state,
          taskToEdit: action.payload,
        };
      }


      // for first time action being triggered set showEdit true and taskToEdit to paylaod
      return {
        ...state,
        showEdit: true,
        taskToEdit: action.payload,
      };

    // case ACTIONS.NEW_TASK:
    //   return {
    //     ...state,
    //     message: action.payload,
    //   };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export const useApplicationData = () => {
  const initialState = {
    taskData: [],
    taskToEdit: null,
    showEdit: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = () => {
    axios
      .get("/api/tasks/")
      .then((res) => {
        dispatch({ type: ACTIONS.SET_TASK_DATA, payload: res.data });
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = (task) => {
    axios
      .post("/api/tasks/new", task)
      .then((res) => {
        dispatch({ type: ACTIONS.CREAT_TASK, payload:  task}); // set update data from server  ) });
        fetchTasks();
        toast.success(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id) => {
    axios
      .get(`/api/tasks/delete/${id}`)
      .then((res) => {
        dispatch({ type: ACTIONS.DELETE_TASK, payload: res.data.tasksData });
        fetchTasks();
        toast.success(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  const showEditComponent = (id) => {
    // console.log(id);
    axios
      .get(`/api/tasks/edit/${id}`)
      .then((res) => {
        // console.log(res.data.title);
        dispatch({
          type: ACTIONS.SHOW_EDIT_COMPONENT,
          payload: res.data.title,
        });
      })
      .catch((error) => console.log(error));
  
  };

  // axios
  // .get(`/api/tasks/edit/${id}`)
  // .then((res) => {
  //   console.log(res.data.title);
  //   dispatch({ type: ACTIONS.SHOW_EDIT_COMPONENT, payload: res.data.title });
  // })
  // .catch((error) => console.log(error));

  return [state, createTask, handleDeleteTask, showEditComponent];
};