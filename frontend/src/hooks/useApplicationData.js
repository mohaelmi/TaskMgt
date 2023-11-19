import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ACTIONS = {
  SET_TASK_DATA: "SET_PHOTO_DATA",
  DELETE_TASK: "DELETE_TASK",
  CREAT_TASK: "CREATE_TASK",
  SHOW_EDIT_TASK: "SHOW_EDIT_TASK",
  SELECT_TASK: "SELECT_TASK",
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
        showModel: action.payload,
      };

    case ACTIONS.SHOW_EDIT_TASK:
  
      // const paylaodIsCurrentTask = action.payload.id === state.taskToEdit.id;
      if(!action.payload) {
        return {
          ...state,
          showModel: null,
          taskToEdit: {}
        };
      }

      // hide edit
      // if(paylaodIsCurrentTask) {
      //   console.log("hide task");
      //   //hide edit component and make taskToEdit in the state null
      //   return {
      //     ...state,
      //     showEdit: false,
      //     taskToEdit: {...state.taskToEdit, id: null},
      //   };
      // }

      // if(!paylaodIsCurrentTask && state.taskToEdit.id !== null ) {
      //   //update edit component and let taskToEdit state stay true
      //   return {
      //     ...state,
      //     taskToEdit: { ...action.payload },
      //   };
      // }

      // for first time action being triggered set showModel id and taskToEdit to paylaod
      return {
        ...state,
        showModel: action.payload.id,
        taskToEdit: action.payload
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
    taskToEdit: {},
    showModel: null,
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
        // dispatch({ type: ACTIONS.CREAT_TASK, payload:  task}); // set update data from server  ) });
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
        // fetchTasks();
        toast.success(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  const showEditTask = (id) => {
    // console.log(id);
    // axios
    //   .get(`/api/tasks/edit/${id}`)
    //   .then((res) => {
    //     // console.log(res.data.title);
    //     dispatch({
    //       type: ACTIONS.SHOW_EDIT_TASK,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((error) => console.log(error));
  };

  const toggleModal = (task) => {
    // state.showModel = id;


      dispatch({
        type: ACTIONS.SHOW_EDIT_TASK,
        payload: task,
      });
    
  };

  // axios
  // .get(`/api/tasks/edit/${id}`)
  // .then((res) => {
  //   console.log(res.data.title);
  //   dispatch({ type: ACTIONS.SHOW_EDIT_COMPONENT, payload: res.data.title });
  // })
  // .catch((error) => console.log(error));

  return [state, createTask, handleDeleteTask, showEditTask, toggleModal];
};
