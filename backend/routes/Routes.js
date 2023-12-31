const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/userTask");

const ensureAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
};

router.get("/", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.json([]);
  } else {
    userQueries
      .getTasksByUserId(userId)
      .then((tasks) => {
        res.json(tasks);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error fetching tasks for the user" });
      });
  }
});

router.post("/new", ensureAuthenticated, (req, res) => {
  const userId = req.session.userId;

  const {
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
  userQueries
    .createTask(
      userId,
      title,
      category,
      description,
      status,
      importancelevel,
      estimatedstarttime,
      duration,
      actualstarttime,
      actualendtime
    )
    .then(() => {
      res.json({ message: "Task added successfully" });
    })
    .catch(() => {
      res.status(500).json({ error: "Error adding a new task" });
    });
});

router.post("/delete", ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // get logged-in user ID
  const taskId = req.body.taskId; // get task ID from the request body
  if (!taskId) {
    return res
      .status(400)
      .json({ error: "Task ID is missing in the request body" });
  }

  try {
    // get the task details by ID
    const task = await userQueries.getTaskById(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Check if the task belongs to the logged-in user
    if (task.userid !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this task" });
    }

    // Delete the task
    await userQueries.deleteTask(taskId);

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(503).json({ error: "Error deleting task", details: error });
  }
});

router.get("/s", (req, res) => {
  const userId = req.session.userId;
  if (userId) {
    res.send(`User is logged in with ID: ${userId}`);
  } else {
    res.send("User is not logged in");
  }
});

router.post("/edit", ensureAuthenticated, (req, res) => {
  const userId = req.session.userId; // get logged-in user ID
  const updatedTask = req.body; // get task ID from the route
  // check if the task belongs to the logged-in user
  if (updatedTask.userid !== userId) {
    return res
      .status(403)
      .json({ error: "You are not authorized to update this task" });
  }
  // const task = await userQueries.getTaskById(updatedTask.id); // get task details by ID
  userQueries
    .updateTask(updatedTask)
    .then((updatedTaskDetails) => {
      res.json({ message: "Task updated successfully", updatedTaskDetails });
    })
    .catch(() => {
      res.status(500).json({ error: 'Error updating task'});
    });
});

router.post("/setStartTime", ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // Get logged-in user ID from session
  const { taskId, status, time } = req.body;

  const task = await userQueries.getTaskById(taskId); // Fetch task details

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Check if the task belongs to the logged-in user
  if (task.userid !== userId) {
    return res
      .status(403)
      .json({ error: "You are not authorized to update this task" });
  }

  // Proceed to update the start time as it's the user's task
  const updatedTask = await userQueries.setActualStartTime(
    taskId,
    status,
    time
  );
  res.json({
    message: `YOU STARTED ${updatedTask.title.toUpperCase()}`,
    task: updatedTask,
  });
});

router.post("/setEndTime", ensureAuthenticated, async (req, res) => {
  const userId = req.session.userId; // Get logged-in user ID from session
  const { taskId, status, time } = req.body;

  const task = await userQueries.getTaskById(taskId); // Fetch task details

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  // Check if the task belongs to the logged-in user
  if (task.userid !== userId) {
    return res
      .status(403)
      .json({ error: "You are not authorized to update this task" });
  }

  // Proceed to update the end time as it's the user's task
  const updatedTask = await userQueries.setActualEndTime(taskId, status, time);
  res.json({ message: `CONGRATS FINISHED ${updatedTask.title.toUpperCase()}` });
});

router.post("/startAgain", ensureAuthenticated, (req, res) => {
  const { taskId, status } = req.body;

  userQueries
    .setBeginning(taskId, status)
    .then((task) => {
      res.json({ message: `RESET ${task.title.toUpperCase()}` });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error setting up task into inital", error });
    });
});

// setEndTimeToNull
router.post("/setEndTimeToNull", ensureAuthenticated, (req, res) => {
  const { taskId, status } = req.body;

  userQueries
    .setEndTimeToNull(taskId, status)
    .then((task) => {
      res.json({ message: `${task.title.toUpperCase()} BACK INTO PROGRESS` });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Error setting up task into inital", error });
    });
});


module.exports = router;
