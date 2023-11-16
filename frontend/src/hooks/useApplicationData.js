import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ACTIONS = {
  SET_TASK_DATA: "SET_PHOTO_DATA",
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
    taskData: []
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
        fetchTasks();
        // dispatch({ type: ACTIONS.NEW_TASK, payload: // set update data from server  ) });
        toast.success(res.data.message)
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id) => {
    axios
      .get(`/api/tasks/delete/${id}`)
      .then((res) => {
        dispatch({ type: ACTIONS.DELETE_TASK, payload: res.data.tasksData });
      })
      .catch((error) => console.log(error));
  };

  return [state, createTask, handleDeleteTask];
};
