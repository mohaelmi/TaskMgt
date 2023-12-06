import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "./Modal";

function CreateTask({ closeModal, createTask }) {

  return <Modal closeModal={closeModal} text={"ADD"} callback={createTask} title={"CREATE NEW TASK"} />;
}

export default CreateTask;
