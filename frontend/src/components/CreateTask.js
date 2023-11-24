import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "./Modal";

function CreateTask({ closeModal, createTask }) {
  const [task, setTask] = useState({});
  // console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = e.target.elements;

    if (!title.value) {
      return toast.error("please insert valid task!");
    }

    // const task = {
    //   userId: 1,
    //   title: title.value, //"Play soccer",
    //   category: "Leisure",
    //   description: "play soccer with some friends",
    //   status: "Todo",
    //   priorityLevel: "Medium",
    //   importanceLevel: "Medium",
    //   dueDate: "20:00:00",
    //   estimatedStartTime: '15:00:00',
    //   estimatedEndTime: '16:00:00',
    //   actualStartTime: null,
    //   actualEndTime: null
    // }

    // createTask(task)
  };
  return <Modal closeModal={closeModal} text={"ADD"} callback={createTask} />;
}

export default CreateTask;
