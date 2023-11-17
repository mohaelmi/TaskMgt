import React from 'react'

function EditTask({taskId, taskToEdit}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { title } = e.target.elements
    console.log("submitted", title.value);
  }

  console.log("task", taskToEdit);
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-10 w-64 px-1"
      name = "title"
      value = {taskToEdit}
    />
    <button type="submit" className="bg-cyan-500 rounded-md px-4 h-12 text-white"> 
      EDIT
    </button>

  </form>
    // <div>{taskId}</div>
  )
}

export default EditTask