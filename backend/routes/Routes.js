const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/userTask');

const ensureAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

router.get('/', ensureAuthenticated, (req, res) => {
  const userId = req.session.userId;
  if(!userId) {
    res.json([]);
  } else {
  userQueries.getTasksByUserId(userId)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error fetching tasks for the user' });
    });
  }
});

router.post('/new', ensureAuthenticated, (req, res) => {
  const {
    userId,
    title,
    category,
    description,
    status,
    priorityLevel,
    importanceLevel,
    dueDate,
    estimatedStartTime,
    estimatedEndTime,
    actualStartTime,
    actualEndTime,
  } = req.body;

  userQueries.createTask(userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime)
    .then(() => {
      res.json({ message: 'Task added successfully' });
    })
    .catch(() => {
      res.status(500).json({ error: 'Error adding a new task' });
    });
});

router.get('/delete/:id', ensureAuthenticated, (req, res) => {
  const id = req.params.id;
  userQueries.deleteTask(id)
    .then(() => {
      res.json({ message: 'Task deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting task', details: error });
    });
});

router.post('/edit', ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // get logged-in user ID
  const updatedTask = req.body; // get task ID from the route
  // check if the task belongs to the logged-in user
  if (updatedTask.userId !== userId) {
    return res.status(403).json({ error: 'You are not authorized to update this task' });
  }
  const task = await userQueries.getTaskById(updatedTask.id); // get task details by ID
  userQueries.updateTask(updatedTask)
      .then((updatedTaskDetails) => {
        res.json({ message: 'Task updated successfully', updatedTaskDetails });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error updating task', details: error });
      });
});


router.post('/setStartTime/:taskId', ensureAuthenticated, (req, res) => {
  const { startTime } = req.body;
  const { taskId } = req.params;

  userQueries.setStartTime(startTime, taskId)
    .then(() => {
      res.json({ message: 'Actual start time updated successfully' });
    })
    .catch(() => {
      res.status(500).json({ error: 'Error updating actual start time' });
    });
});

router.post('/setEndTime/:taskId', ensureAuthenticated, (req, res) => {
  const { endTime } = req.body;
  const { taskId } = req.params;

  userQueries.setEndTime(endTime, taskId)
    .then(() => {
      res.json({ message: 'Actual end time updated successfully' });
    })
    .catch(() => {
      res.status(500).json({ error: 'Error updating actual end time' });
    });
});

module.exports = router;
