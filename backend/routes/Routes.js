const express = require('express');
const router = express.Router();
const { createTask,setActualStartTime,setActualEndTime,getTasksByUserId,} = require('../db/queries/userTask');

// Get tasksData for a specific user
router.get('/:id', (req, res) => {
    const userId = req.params.id;
  
    getTasksByUserId(userId)
      .then(tasks => {
        res.json(tasks);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error fetching tasks for the user' });
      });
  });
// Add a new task
router.post("/new", (req, res) => {
    const { userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime } = req.body;
  
    createTask(userId, title, category, description, status, priorityLevel, importanceLevel, dueDate,EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime)
      .then(() => {
        res.json({ message: "Task added successfully" });
      })
      .catch(() => {
        res.status(500).json({ error: 'Error adding a new task' });
      });
  });
  
  module.exports = router;