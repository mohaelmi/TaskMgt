DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

-- Creating the 'users' table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    Username VARCHAR(50),
    Password VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    UserID INT,
    Title VARCHAR(100),
    Category VARCHAR(50),
    Description TEXT,
    Status VARCHAR(20),
    PriorityLevel VARCHAR(20),
    ImportanceLevel VARCHAR(20),
    DueDate TIME,
    EstimatedStartTime TIME,
    EstimatedEndTime TIME,
    ActualStartTime TIME,
    ActualEndTime TIME,
    FOREIGN KEY (UserID) REFERENCES users(id)
);

-- Creating the 'notifications' table
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    UserID INT,
    TaskID INT,
    NotificationType VARCHAR(20),
    NotificationDate TIME,
    Message TEXT,
    FOREIGN KEY (UserID) REFERENCES users(id),
    FOREIGN KEY (TaskID) REFERENCES tasks(id)
);