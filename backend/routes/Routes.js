const express = require('express');
const router = express.Router();
const { getAllTasks,createTask,setActualStartTime,setActualEndTime,getTasksByUserId,} = require('../db/queries/userTask');
// Get all tasks
router.get('/task', (req, res) => {
    try {
      getAllTasks()
        .then(tasks => {
          res.json(tasks);
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
          res.status(500).json({ error: 'Error fetching tasks' });
        });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  });
  
  
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
 // Set actual start time for a task
router.post('/setStartTime/:taskId', (req, res) => {
    const { startTime } = req.body;
    const { taskId } = req.params;

    setActualStartTime(startTime, taskId)
        .then(() => {
            res.json({ message: "Actual start time updated successfully" });
        })
        .catch(() => {
            res.status(500).json({ error: 'Error updating actual start time' });
        });
});

// Set actual end time for a task
router.post('/setEndTime/:taskId', (req, res) => {
    const { endTime } = req.body;
    const { taskId } = req.params;

    setActualEndTime(endTime, taskId)
        .then(() => {
            res.json({ message: "Actual end time updated successfully" });
        })
        .catch(() => {
            res.status(500).json({ error: 'Error updating actual end time' });
        });

});
  module.exports = router;