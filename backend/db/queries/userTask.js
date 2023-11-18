// taskQueries.js

const createTask = `
  INSERT INTO tasks (UserID, Title, Category, Description, Status, PriorityLevel, ImportanceLevel, DueDate)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
`;

const setActualStartTime = `
  UPDATE tasks
  SET ActualStartTime = $1
  WHERE TaskID = $2
  RETURNING *;
`;

const setActualEndTime = `
  UPDATE tasks
  SET ActualEndTime = $1
  WHERE TaskID = $2
  RETURNING *;
`;

const editTask = `
  UPDATE tasks
  SET Title = $1, Category = $2, Description = $3, Status = $4, PriorityLevel = $5, ImportanceLevel = $6, DueDate = $7
  WHERE TaskID = $8
  RETURNING *;
`;
const getUserById = `
  SELECT * FROM users
  WHERE UserID = $1;
`;
const getTasksByUserId = `
  SELECT * FROM tasks
  WHERE UserID = $1;
`;
module.exports = {
  createTask,
  setActualStartTime,
  setActualEndTime,
  editTask,
  getUserById,
  getTasksByUserId,
};
