// backend/db/queries/userTask.js
const db = require('../database');
const bcrypt = require('bcrypt');
const getAllTasks = () => {
  const query = `
    SELECT * FROM tasks;
  `;

  return db
    .query(query)
    .then((result) => result.rows)
    .catch((error) => {
      console.error('Error fetching tasks:', error);
      throw new Error('Error fetching tasks');
    });
};

const createTask = (
  userId, title, category, description, status, importanceLevel, estimatedstartTime, duration,  actualStartTime, actualEndTime
) => {
  const query = `
    INSERT INTO tasks (UserID, Title, Category, Description, Status, ImportanceLevel, EstimatedStartTime, duration, ActualStartTime, ActualEndTime)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;
  const values = [
    userId, title, category, description, status, importanceLevel, estimatedstartTime, duration,  actualStartTime, actualEndTime
  ];

  return db
    .query(query, values)
    .then((result) => result.rows[0])
    .catch((error) => {
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

  return db
    .query(query, values)
    .then((result) => result.rows[0])
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
const deleteNotificationsByTaskID = async (taskId) => {
  try {
    // Delete all notifications related to the task
    const result = await db.query('DELETE FROM notifications WHERE TaskID = $1 RETURNING *;', [taskId]);
    const deletedNotifications = result.rows;

    console.log('Deleted notifications:', deletedNotifications);
    return deletedNotifications.length > 0; // Returns true if notifications were deleted
  } catch (error) {
    console.error('Error deleting notifications:', error);
    return false; // Deletion unsuccessful
  }
};



const deleteTask = (taskId) => {
  return db.query('DELETE FROM tasks WHERE id = $1;', [taskId]);
};


//update task as a user //check later
const updateTask = (task) => {
  return db
    .query(`UPDATE tasks 
    SET
      Title = $1,
      Category = $2,
      Description = $3,
      Status = $4,
      ImportanceLevel = $5,
      EstimatedStartTime = $6,
      duration = $7,
      ActualStartTime = $8,
      ActualEndTime = $9
    WHERE id = $10 
    RETURNING *;
    `, [
      // userId, title, category, description, status, importanceLevel, estimatedstartTime, duration,  actualStartTime, actualEndTime
      task.title,
      task.category,
      task.description,
      task.status,
      // task.dueDate,
      task.importanceLevel,
      task.estimatedStartTime,
      task.duration,
      task.actualStartTime,
      task.actualEndTime,
      task.id,
    ])
    .then((result) => {
      console.log('in queries:', result.rows);
      return result.rows;
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

  return db
    .query(query, values)
    .then((result) => result.rows[0])
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

  return db
    .query(query, values)
    .then((result) => result.rows)
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

// get task by user task
const getTaskById = (taskId) => {
  return db.query('SELECT * FROM tasks WHERE id = $1', [taskId])
    .then((result) => {
      return result.rows[0]; // Assuming the task ID is unique, return the first row
    })
    .catch((error) => {
      throw error;
    });
};
//example:
// console.log(getTaskById(2))

//  get user by userid
const getUserById = (id) => {
  const query = `
    SELECT *
    FROM users
    WHERE id = $1;
  `;
  const values = [id];

  return db
    .query(query, values)
    .then((result) => result.rows[0])
    .catch((error) => {
      console.error('Error fetching user by ID:', error);
      throw new Error('Error fetching user by ID');
    });
};
//Example:
// getUserById(1)
//   .then(user => {
//     if (user) {
//       console.log('User found:', user);
//     } else {
//       console.log('User not found');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

// create a new user
const createUser = (username, email, password) => {
  const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [username, email, password];

  return db
    .query(query, values)
    .then((result) => result.rows[0])
    .catch((error) => {
      console.error('Error creating user:', error);
      throw new Error('Error creating user');
    });
};

//Example
// createUser('sama','test@example.com', 'password123')
//   .then(newUser => {
//     console.log('New user created:', newUser);
//   })
//   .catch(error => {
//     console.error('Error creating user:', error.message);
//   });

// get user by email
const getUserByEmail = (email) => {
  const query = `
    SELECT *
    FROM users
    WHERE email = $1;
  `;
  const values = [email];

  return db
    .query(query, values)
    .then((result) => {
      console.log('email query', result.rows[0]);
      return result.rows[0];
    })
    .catch((error) => {
      console.error('Error fetching user by email:', error);
      throw new Error('Error fetching user by email');
    });
};

// getUserByEmail('test@example.com')
//   .then(user => {
//     if (user) {
//       console.log('User found:', user);
//     } else {
//       console.log('User not found');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });


// const hashExistingUsersPasswords = async () => {
//   try {
//     const users = await db.query('SELECT * FROM users');

//     for (const user of users.rows) {
//       const hashedPassword = bcrypt.hashSync(user.password, 10);
//       await db.query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, user.id]);
//       console.log(hashedPassword);
      
//     }
//     console.log('Passwords for existing users updated successfully!');
//   } catch (error) {
//     console.error('Error updating existing user passwords:', error);
//     throw new Error('Error updating existing user passwords');
//   }
// };

module.exports = {
  getAllTasks,
  createTask,
  setActualStartTime,
  setActualEndTime,
  getTasksByUserId,
  deleteNotificationsByTaskID,
  deleteTask,
  updateTask,
  createUser,
  getUserByEmail,
  getUserById,
  getTaskById,
  // hashExistingUsersPasswords,
};
