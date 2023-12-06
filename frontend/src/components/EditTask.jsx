import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function EditTask({ taskId, taskToEdit, closeModal, updateTask, tasks }) {
  

  return (
  <Modal  taskToEdit={taskToEdit} closeModal = {closeModal} text={"SUBMIT"} callback ={updateTask}  title={"UPDATE TASK"}/>

  );
}

export default EditTask;
