const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/userTask');

const ensureAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

router.get('/', (req, res) => {
  const userId = req.session.userId;
  console.log("session id", userId);
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
    importancelevel,
    estimatedstarttime,
    duration,
    actualstarttime,
    actualendtime,
  } = req.body;

  // UserID, Title, Category, Description, Status, ImportanceLevel, EstimatedStartTime, duration, ActualStartTime, ActualEndTime
  userQueries.createTask(userId, title, category, description, status, importancelevel, estimatedstarttime, duration,  actualstarttime, actualendtime)
    .then(() => {
      res.json({ message: 'Task added successfully' });
    })
    .catch(() => {
      res.status(500).json({ error: 'Error adding a new task' });
    });
});

router.post('/delete', ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // get logged-in user ID
  const taskId = req.body.taskId; // get task ID from the request body
  console.log(taskId);
  if (!taskId) {
    return res.status(400).json({ error: 'Task ID is missing in the request body' });
  }

  try {
    // get the task details by ID
    const task = await userQueries.getTaskById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Check if the task belongs to the logged-in user
    if (task.userid !== userId) {
      return res.status(403).json({ error: 'You are not authorized to delete this task' });
    }

    // Delete the task
    await userQueries.deleteTask(taskId);

    // //Delete notifications related to the task
    // const notificationsDeleted = await userQueries.deleteNotificationsByTaskID(taskId);

    // if (!notificationsDeleted) {
    //   return res.status(500).json({ error: 'Error deleting notifications' });
    // }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(503).json({ error: 'Error deleting task', details: error });
  }
});




router.get('/s', (req, res) => {
  const userId = req.session.userId;
  if (userId) {
    res.send(`User is logged in with ID: ${userId}`);
  } else {
    res.send('User is not logged in');
  }
});



router.post('/edit',ensureAuthenticated,  (req, res) => {
  const userId = req.session.userId; // get logged-in user ID
  const updatedTask = req.body; // get task ID from the route
  console.log("updated task user id", updatedTask.userid);
  // check if the task belongs to the logged-in user
  if (updatedTask.userid !== userId) {
    return res.status(403).json({ error: 'You are not authorized to update this task' });
  }
  // const task = await userQueries.getTaskById(updatedTask.id); // get task details by ID
  userQueries.updateTask(updatedTask)
  .then((updatedTaskDetails) => {
    console.log("-------------", updatedTaskDetails);
        res.json({ message: 'Task updated successfully', updatedTaskDetails });
      })
      .catch((error) => {
        console.log(error);
        // res.status(500).json({ error: 'Error updating task', details: error });
      });
});


router.post('/setStartTime', ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // Get logged-in user ID from session
  const {startTime, taskId } = req.body;

  const task = await userQueries.getTaskById(taskId); // Fetch task details

  console.log('ssssssssssssss', taskId, status);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Check if the task belongs to the logged-in user
  if (task.userid !== userId) {
    return res.status(403).json({ error: 'You are not authorized to update this task' });
  }

    // Proceed to update the start time as it's the user's task
    const updatedTask = await userQueries.setActualStartTime(taskId, status);
    res.json({ message: 'Actual start time updated successfully', task: updatedTask });
  
});

router.post('/setEndTime', ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // Get logged-in user ID from session
  const { taskId,endTime} = req.body;

  const task = await userQueries.getTaskById(taskId); // Fetch task details


  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  // Check if the task belongs to the logged-in user
  if (task.userid !== userId) {
    return res.status(403).json({ error:'You are not authorized to update this task'});
  }

  // Proceed to update the end time as it's the user's task
  await userQueries.setActualEndTime(taskId, status);
  res.json({ message: 'Actual End time updated successfully' });
});



router.post('/startAgain',ensureAuthenticated,  (req, res) => {
  const {taskId, status } = req.body;


    userQueries.setBeginning(taskId, status)
    .then((task) => {
      console.log("-------------", task);
          res.json({ message: 'Task set initials successfully'});
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ error: 'Error setting up task into inital', error });
        });

  })



module.exports = router;
