const fs = require('fs');
const express = require('express');
const router = express.Router();
const {tasksData, users} = require('../data.js')



// get all tasksData 
router.get('/', (req, res) => {
  res.json(tasksData);

});

// get tasksData for specific user 
router.get('/:id', (req, res) => {

  const data = tasksData.filter(task => task.userId === Number(req.params.id))
  res.json(data);

});

// add a new task 
router.post("/new", (req, res) => {

  console.log(req.body);
  const id = tasksData.length + 1
  const newTask = { ...req.body, id }
  tasksData.push(newTask)
  res.json({message: "task added successfully!!"});
  
});


// edit a new task 
router.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasksData.find(task => task.id === id)
  if(task) { 
    res.json(task)
  }
  res.json({message: "task not found"});
  
});


// delete a task 
// /delete?id --query
router.get("/delete/:id", (req, res) => {

  const id = parseInt(req.params.id)
  tasksData.map((task, idx, tasksData) => {
    if(task.id === id) {
      tasksData.splice(idx, 1)
    }
  })
  console.log(tasksData);
  res.json({tasksData, message: "task deleted successfully!!"});
  
});


module.exports = router;
