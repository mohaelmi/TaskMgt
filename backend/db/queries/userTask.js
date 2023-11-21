// backend/db/queries/userTask.js
const db = require('../database');

const getAllTasks = () => {
  const query = `
    SELECT * FROM tasks;
  `;

  return db.query(query)
    .then(result => result.rows)
    .catch(error => {
      console.error('Error fetching tasks:', error);
      throw new Error('Error fetching tasks');
    });
};

const createTask = (userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime) => {
  const query = `
    INSERT INTO tasks (UserID, Title, Category, Description, Status, PriorityLevel, ImportanceLevel, DueDate, EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;
  `;
  const values = [userId, title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(error => {
      console.error('Error creating task:', error);
      throw new Error('Error creating task');
    });
};

// Example 
// createTask( 3,"tasktitle" ,'General', 'Description of Task 1', 'closed', 'High', 'High', '08:00:00','09:00:00','10:30:00','11:00:00')
//   .then(task => {
//     console.log('Created Task:', task);
//     // Use the returned task or ID for further testing
//   })
//   .catch(error => {
//     console.error('Error creating task:', error);
//   });



const setActualStartTime = (startTime, taskId) => {
  const query = `
    UPDATE tasks
    SET ActualStartTime = $1
    WHERE id = $2
    RETURNING *;
  `;
  const values = [startTime, taskId];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(() => {
      throw new Error('Error setting actual start time');
    });
};
//Example:


// setActualStartTime('09:00:00', 4)
//   .then(updatedTask => {
//     console.log('Updated Task:', updatedTask);
//     // Use the updated task data or ID for further operations
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

//Delete task as a user
const deletTask = (taskId) => {
  return db
    .query("DELETE FROM tasks WHERE id = $1 RETURNING *;", [taskId])
    .then((result) => {
      console.log("in queries:", result.rows);
      return  result.rows;
    });
};

//update task as a user
const updateTask = (task) => {
  const {title, category, description, status, priorityLevel, importanceLevel, dueDate, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime } = task
  console.log("task id in the query", task.id);
  return db
    .query(`UPDATE tasks SET Title=$1 WHERE id = $2 RETURNING *;`, [title, task.id])
    .then((result) => {
      console.log("in queries:", result.rows);
      return  result.rows;
    });
};




const setActualEndTime = (endTime, taskId) => {
  const query = `
    UPDATE tasks
    SET ActualEndTime = $1
    WHERE id = $2
    RETURNING *;
  `;
  const values = [endTime, taskId];

  return db.query(query, values)
    .then(result => result.rows[0])
    .catch(() => {
      throw new Error('Error setting actual end time');
    });
};
//Examp;e
// setActualEndTime('11:00:00', 4)
//   .then(updatedTask => {
//     console.log('Updated Task:', updatedTask);
//     // Use the updated task data or ID for further operations
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

const getTasksByUserId = (userId) => {
  const query = `
    SELECT *
    FROM tasks
    WHERE UserID = $1;
  `;
  const values = [userId];

  return db.query(query, values)
    .then(result => result.rows)
    .catch(() => {
      throw new Error('Error fetching tasks for the user');
    });
};
//Example:
// getTasksByUserId(1)
//   .then(tasks => {
//     console.log('Tasks:', tasks);
//     // Use the retrieved tasks data as needed
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });



module.exports = {
  getAllTasks,
  createTask,
  setActualStartTime,
  setActualEndTime,
  getTasksByUserId,
  deletTask,
  updateTask,
};
