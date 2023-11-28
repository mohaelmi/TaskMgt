import { useReducer, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ACTIONS = {
  SET_TASK_DATA: 'SET_PHOTO_DATA',
  DELETE_TASK: 'DELETE_TASK',
  CREAT_TASK: 'CREATE_TASK',
  SHOW_EDIT_TASK: 'SHOW_EDIT_TASK',
  SELECT_TASK: 'SELECT_TASK',
  SHOW_MODAL_CREATE_TASK: 'SHOW_MODAL_CREATE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
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

    case ACTIONS.USER_LOGIN:
      console.log('user data', action.payload);

      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.USER_LOGOUT:
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export const useApplicationData = () => {
  const userInfo = localStorage.getItem('user');
  let user = null;
  if (userInfo) {
    user = JSON.parse(userInfo);
  }

  console.log(typeof JSON.parse(userInfo));
  const initialState = {
    taskData: [],
    taskToEdit: {},
    showModal: false,
    showCreateModal: false,
    user: user,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  const fetchTasks = () => {
    axios
      .get('/api/tasks')
      .then((res) => {
        console.log('data related to user ', res.data);
        if (res.data.length < 1) {
          navigate('/login');
        }
        dispatch({ type: ACTIONS.SET_TASK_DATA, payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, [state.user]);

  const createTask = (task) => {
    console.log('create task', task);
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
        dispatch({ type: ACTIONS.EDIT_TASK });
        toast.success(res.data.message);
        fetchTasks();
        console.log('-- edited task', res.data);
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

  const userLogin = (email, password) => {
    axios
      .post('/login', { email, password })
      .then((res) => {
        // console.log("## user", res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        // const user = localStorage.getItem("user_id");
        dispatch({ type: ACTIONS.USER_LOGIN, payload: res.data.user });
        console.log('response when login', res.data.user);
        // console.log("local storage", user);
      })

      .catch((error) => {
        toast.error('Login failed. Please check your credentials.');
      });
  };

  const userSignup = (userInfo) => {
    // const { username, email, pwd } = userInfo;
    console.log(userInfo);
    axios
      .post('/auth/register', userInfo)
      .then((res) => {
        console.log(res.data);
        // dispatch({ type: ACTIONS.USER_SIGNUP, payload: res.data });
      })
      .catch((error) => console.log(error));
  };

  const userLogOut = () => {
    axios
      .get('/logout')
      .then((res) => {
        dispatch({ type: ACTIONS.USER_LOGOUT, payload: null });
        localStorage.setItem('user', null);
        navigate('/login');
        // console.log("response when login", res.data.user)
        console.log('log out', res.data);
      })
      .catch((error) => console.log(error));
  };

  return [
    state,
    createTask,
    handleDeleteTask,
    updatedTask,
    toggleModal,
    createToggleModal,
    userLogin,
    userLogOut,
    userSignup,
  ];
};
