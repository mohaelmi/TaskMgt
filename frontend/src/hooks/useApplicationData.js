import { useReducer, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ACTIONS = {
  SET_TASK_DATA: 'SET_PHOTO_DATA',
  DELETE_TASK: 'DELETE_TASK',
  CREAT_TASK: 'CREATE_TASK',
  SHOW_EDIT_TASK: 'SHOW_EDIT_TASK',
  SELECT_TASK: 'SELECT_TASK',
  SHOW_MODAL_CREATE_TASK: 'SHOW_MODAL_CREATE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
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
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    // case ACTIONS.EDIT_TASK:
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
        showCreateModal: action.payload,
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
    showModal: false,
    showCreateModal: false,
    isLoggedIn: false,
    user: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = () => {
    axios
      .get('/api/tasks/')
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: ACTIONS.SET_TASK_DATA, payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = (task) => {
    console.log('delete task', task);
    axios
      .post('/api/tasks/new', task)
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
        // dispatch({ type: ACTIONS.DELETE_TASK, payload: res.data.tasks });
        fetchTasks();
        toast.success(res.data.message);
      })
      .catch((error) => console.log(error));
  };

  const updatedTask = (task) => {
    console.log('updated task', task);
    axios
      .post(`/api/tasks/edit`, task)
      .then((res) => {
        // dispatch({ type: ACTIONS.EDIT_TASK, payload: task });
        toast.success(res.data.message);
        state.showModal = null;
        fetchTasks();
        console.log(res.data);
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

  const createToggleModal = (value) => {
    dispatch({ type: ACTIONS.SHOW_MODAL_CREATE_TASK, payload: value });
  };

  const handleLogin = async (enteredValues) => {
    console.log(enteredValues);
    try {
      const {
        data: { user },
      } = await axios.post('http://localhost:8080/login', enteredValues);

      localStorage.setItem('user', user);
      dispatch({ type: ACTIONS.LOGIN, payload: user });
    } catch (error) {
      console.error('Login failed:', error.response.data);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/logout');

      dispatch({ type: ACTIONS.LOGOUT });
    } catch (error) {
      console.error('Logout failed:', error.response.data);

      throw error;
    }
  };

  return [
    state,
    createTask,
    handleDeleteTask,
    updatedTask,
    toggleModal,
    createToggleModal,
    handleLogin,
    handleLogout,
  ];
};
