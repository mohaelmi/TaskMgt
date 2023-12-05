import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function EditTask({ taskId, taskToEdit, closeModal, updateTask, tasks }) {
  // console.log("task to edit", taskToEdit);
  const [task, setTask] = useState(taskToEdit);
  useEffect(() => {
    setTask(taskToEdit);
  }, [taskToEdit]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const { title, description } = e.target.elements
  //   console.log("updated task", task);
  //   // updateTask(task)
    
  // };

  // console.log("task", task.estimatedStartTime);

  return (

  <Modal task={task} taskToEdit={taskToEdit} setTask={setTask} closeModal = {closeModal} text={"SUBMIT"} callback ={updateTask}  title={"UPDATE TASK"}/>
    // <div>{taskId}</div>
  );
}

export default EditTask;
