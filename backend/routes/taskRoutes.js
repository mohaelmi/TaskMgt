const fs = require('fs');
const express = require('express');
const router = express.Router();
const {tasks, users} = require('../data.js')



// get all tasks 
router.get('/', (req, res) => {
  res.json(tasks);

});

// get tasks for specific user 
router.get('/:id', (req, res) => {

  const data = tasks.filter(task => task.userId === Number(req.params.id))
  res.json(data);

});

// add a new task 
router.post("/new", (req, res) => {

  const newTask = req.body
  tasks.push(newTask)
  res.json({message: "added successfully!!"});
  
});



module.exports = router;
