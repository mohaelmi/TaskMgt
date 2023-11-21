const express = require('express');
const router = express.Router();
const passport = require('passport');
const { getAllTasks,createTask,setActualStartTime,setActualEndTime,getTasksByUserId, deletTask, updateTask,createUser,getUserByEmail,getUserById} = require('../db/queries/userTask');
// const { ensureAuthenticated } = require('../middlewares/authMiddleware');

// Middleware to check if user is authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // Proceed to the next middleware or route handler
  }
  res.status(401).json({ error: 'Unauthorized' });
};



// Get all tasks
router.get('/', (req, res) => {
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
  
  // Get task based on user id
  router.get('/:id', ensureAuthenticated, (req, res) => {
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
router.post('/new', ensureAuthenticated, (req, res) => {
  // console.log(req.body);
    const { userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime } = req.body;
  
    createTask(userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime)
      .then(() => {
        res.json({ message: "Task added successfully" });
      })
      .catch(() => {
        res.status(500).json({ error: 'Error adding a new task' });
      });
  });


// delete a task 
// /delete?id --query
router.get('/delete/:id', ensureAuthenticated, (req, res) => {
  
  const id = req.params.id
  deletTask(id)
  .then(tasks => {
    // console.log(tasks);
    res.json({tasks, message: "task deleted successfully!!"})
  })
  .catch(error => {
    res.status(500).json({ error, error: 'Error deleting tasks' });
  });
  
});

// post update task
router.post('/edit', ensureAuthenticated, (req, res) => {
  
  // const id = req.params.id
  const updatedTask = req.body
  // res.json("heey edit/id route working")
  console.log(updatedTask);

  updateTask(updatedTask)
  .then(task => {
    console.log("returned from query:", task);
    res.json({task, message: "task updated successfully!!"})
  })
  .catch(error => {
    res.status(500).json({ error, error: 'Error deleting tasks' });
  });
  
});


 // Set actual start time for a task
 router.post('/setStartTime/:taskId', ensureAuthenticated, (req, res) => {
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
router.post('/setEndTime/:taskId', ensureAuthenticated, (req, res) => {
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