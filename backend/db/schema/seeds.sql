INSERT INTO users (Username, Password, Email)
VALUES
    ( 'Sam', '123', 'sam@example.com'),
    ( 'Moha', '456', 'moha@example.com'),
    ( 'Ony', '789', 'ony@example.com');

INSERT INTO tasks (UserID, Title, Category, Description, Status, PriorityLevel, ImportanceLevel, DueDate, EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime)
VALUES
    
    (1, 'Read a Book', 'Leisure', 'Read a novel for relaxation.', 'Todo', 'Low', 'Low', '20:00:00', '19:00:00', '20:00:00', NULL, NULL),
    (1, 'Learning New Skill', 'Education', 'Spend an hour learning something new.', 'In Progress', 'Medium', 'Medium', '11:00:00', '11:00:00', '12:00:00', '11:00:00', NULL),
    
    (2, 'Read a Book', 'Leisure', 'Read the new novel for at least an hour.', 'Todo', 'Medium', 'Medium', '15:00:00', '15:00:00', '16:00:00', NULL, NULL),
    (2, 'Cooking Experiment', 'Cooking', 'Try a new recipe for dinner tonight.', 'Closed', 'Low', 'Low', '21:00:00', '18:00:00', '19:00:00', '18:00:00', '18:00:00'),

    (3, 'Morning Jog', 'Fitness', 'Go for a 30-minute jog in the morning.', 'In Progress', 'Medium', 'Low', '07:00:00', '06:00:00', '06:30:00', '06:00:00', NULL),
    (3, 'Learn Coding', 'Education', 'Practice coding for an hour.', 'Todo', 'High', 'High', '19:00:00', '14:00:00', '15:00:00', NULL, NULL);
    

INSERT INTO notifications ( UserID, TaskID, NotificationType, NotificationDate, Message)
VALUES
    (1, 1, 'Alert', ' 07:00:00', 'Task "Complete Project Proposal" will start within an hour.'),
    (1, 2, 'Reminder', '08:00:00', 'Reminder: Task "Prepare Presentation" is due today.'),
    (1, 3, 'Well Done', '08:00:00', 'Congratulations! Task "Exercise Routine" has been completed.'),
    (1, 5, 'Alert', '09:00:00', 'Task "Learning New Skill" will start within an hour.'),
    (2, 6, 'Alert', '17:00:00', 'Task "Cooking Experiment" will start within an hour.');
    -- (2, 8, 'Reminder', '07:30:00', 'Reminder: you have to start task "Exercise Session" has started.'),
    -- (2, 10, 'Well Done', '09:00:00', 'Congratulations! Task "Write a Short Story" has been completed.'),
    -- (3, 11, 'Alert', '05:00:00', 'Task "Morning Jog" will start within an hour.'),
    -- (3, 14, 'Reminder', '12:00:00', 'Reminder: you have to start task "Sketching" within one hour.'),
    -- ( 3, 15, 'Alert', '18:30:00', 'Task "Cooking Challenge" will start within an hour.');
