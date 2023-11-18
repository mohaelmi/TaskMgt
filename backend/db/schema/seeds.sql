INSERT INTO users (UserID, Username, Password, Email)
VALUES
    (1, 'Sam', '123', 'sam@example.com'),
    (2, 'Moha', '456', 'moha@example.com'),
    (3, 'Ony', '789', 'ony@example.com');

INSERT INTO tasks (TaskID, UserID, Title, Category, Description, Status, PriorityLevel, ImportanceLevel, DueDate, EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime)
VALUES
    (1, 1, 'Complete Project Proposal', 'Work', 'Finish the project proposal by end of the day.', 'In Progress', 'High', 'High', '15:00:00', '08:00:00', '18:00:00', '09:00:00', NULL),
    (2, 1, 'Prepare Presentation', 'Work', 'Create slides for the upcoming presentation.', 'Todo', 'High', 'Medium', '18:00:00', '10:00:00', '13:00:00', NULL, NULL),
    (3, 1, 'Exercise Routine', 'Health', 'Follow the daily exercise routine for 30 minutes.', 'Closed', 'Medium', 'Medium', '16:00:00', '07:00:00', '07:30:00', '07:00:00', '07:00:00'),
    (4, 1, 'Read a Book', 'Leisure', 'Read a novel for relaxation.', 'Todo', 'Low', 'Low', '20:00:00', '19:00:00', '20:00:00', NULL, NULL),
    (5, 1, 'Learning New Skill', 'Education', 'Spend an hour learning something new.', 'In Progress', 'Medium', 'Medium', '11:00:00', '11:00:00', '12:00:00', '11:00:00', NULL),
    (6, 2, 'Read a Book', 'Leisure', 'Read the new novel for at least an hour.', 'Todo', 'Medium', 'Medium', '15:00:00', '15:00:00', '16:00:00', NULL, NULL),
    (7, 2, 'Cooking Experiment', 'Cooking', 'Try a new recipe for dinner tonight.', 'Closed', 'Low', 'Low', '21:00:00', '18:00:00', '19:00:00', '18:00:00', '18:00:00'),
    (8, 2, 'Exercise Session', 'Health', 'Workout for 40 minutes.', 'In Progress', 'Medium', 'High', '18:00:00', '07:30:00', '08:10:00', '07:30:00', NULL),
    (9, 2, 'Learning a Musical Instrument', 'Hobby', 'Practice guitar for 30 minutes.', 'Todo', 'Low', 'Medium', '19:00:00', '12:00:00', '12:30:00', NULL, NULL),
    (10, 2, 'Write a Short Story', 'Creative', 'Draft a short story idea.', 'Closed', 'High', 'High', '22:00:00', '09:00:00', '10:00:00', '09:00:00', '09:30:00'),
    (11, 3, 'Morning Jog', 'Fitness', 'Go for a 30-minute jog in the morning.', 'In Progress', 'Medium', 'Low', '07:00:00', '06:00:00', '06:30:00', '06:00:00', NULL),
    (12, 3, 'Learn Coding', 'Education', 'Practice coding for an hour.', 'Todo', 'High', 'High', '19:00:00', '14:00:00', '15:00:00', NULL, NULL),
    (13, 3, 'Explore Nature', 'Leisure', 'Visit a nearby park and take a walk.', 'Todo', 'Low', 'Low', '22:00:00', '16:00:00', '17:00:00', NULL, NULL),
    (14, 3, 'Sketching', 'Art', 'Sketch something creative for 45 minutes.', 'In Progress', 'Medium', 'Medium', '18:00:00', '13:00:00', '13:45:00', '13:00:00', NULL),
    (15, 3, 'Cooking Challenge', 'Cooking', 'Try a new cooking recipe challenge.', 'Todo', 'High', 'Medium', '22:00:00', '19:30:00', '20:30:00', NULL, NULL);
INSERT INTO notifications (NotificationID, UserID, TaskID, NotificationType, NotificationDate, Message)
VALUES
    (1, 1, 1, 'Alert', ' 07:00:00', 'Task "Complete Project Proposal" will start within an hour.'),
    (2, 1, 2, 'Reminder', '08:00:00', 'Reminder: Task "Prepare Presentation" is due today.'),
    (3, 1, 3, 'Well Done', '08:00:00', 'Congratulations! Task "Exercise Routine" has been completed.'),
    (4, 1, 5, 'Alert', '09:00:00', 'Task "Learning New Skill" will start within an hour.'),
    (5, 2, 7, 'Alert', '17:00:00', 'Task "Cooking Experiment" will start within an hour.'),
    (6, 2, 8, 'Reminder', '07:30:00', 'Reminder: you have to start task "Exercise Session" has started.'),
    (7, 2, 10, 'Well Done', '09:00:00', 'Congratulations! Task "Write a Short Story" has been completed.'),
    (8, 3, 11, 'Alert', '05:00:00', 'Task "Morning Jog" will start within an hour.'),
    (9, 3, 14, 'Reminder', '12:00:00', 'Reminder: you have to start task "Sketching" within one hour.'),
    (10, 3, 15, 'Alert', '18:30:00', 'Task "Cooking Challenge" will start within an hour.');
