INSERT INTO users (Username, Password, Email)
VALUES
    ( 'Sam', '$2b$10$vPWIM6ITCJnJQ1Lhf6KV2uEq8rwk/DnCI1f.46C6GM07FFwhMZCZe', 'sam@example.com'),
    ( 'Moha', '$2b$10$NC.NL6nD/HsOX7iDqVLIT.8JTUedj18Qqvjb4UZLjkB4t7rCHImRu', 'moha@example.com'),
    ( 'Ony', '$2b$10$bllTfrew/CYO5n9CrEhB5.fMykRWQGUWBC1io8i/cjnAE29DuY9Cy', 'ony@example.com');

INSERT INTO tasks (UserID, Title, Category, Description, Status, DueDate, EstimatedStartTime, EstimatedEndTime, ActualStartTime, ActualEndTime)
VALUES
    (1, 'Complete Project Proposal', 'Work', 'Finish the project proposal by end of the day.', 'In Progress', '15:00:00', '08:00:00', '18:00:00', '09:00:00', NULL),
    (1, 'Prepare Presentation', 'Work', 'Create slides for the upcoming presentation.', 'Todo','18:00:00', '10:00:00', '13:00:00', NULL, NULL),
    (1, 'Exercise Routine', 'Health', 'Follow the daily exercise routine for 30 minutes.', 'Closed', '16:00:00', '07:00:00', '07:30:00', '07:00:00', '07:00:00'),
    (1, 'Read a Book', 'Leisure', 'Read a novel for relaxation.', 'Todo', '20:00:00', '19:00:00', '20:00:00', NULL, NULL),
    (1, 'Learning New Skill', 'Education', 'Spend an hour learning something new.', 'In Progress','11:00:00', '11:00:00', '12:00:00', '11:00:00', NULL),
    (2, 'Read a Book', 'Leisure', 'Read the new novel for at least an hour.', 'Todo', '15:00:00', '15:00:00', '16:00:00', NULL, NULL),
    (2, 'Cooking Experiment', 'Cooking', 'Try a new recipe for dinner tonight.', 'Closed', '21:00:00', '18:00:00', '19:00:00', '18:00:00', '18:00:00'),
    (2, 'Exercise Session', 'Health', 'Workout for 40 minutes.', 'In Progress','18:00:00', '07:30:00', '08:10:00', '07:30:00', NULL),
    (2, 'Learning a Musical Instrument', 'Hobby', 'Practice guitar for 30 minutes.', 'Todo','19:00:00', '12:00:00', '12:30:00', NULL, NULL),
    ( 2, 'Write a Short Story', 'Creative', 'Draft a short story idea.', 'Closed','22:00:00', '09:00:00', '10:00:00', '09:00:00', '09:30:00'),
    ( 3, 'Morning Jog', 'Fitness', 'Go for a 30-minute jog in the morning.', 'In Progress','07:00:00', '06:00:00', '06:30:00', '06:00:00', NULL),
    ( 3, 'Learn Coding', 'Education', 'Practice coding for an hour.', 'Todo', '19:00:00', '14:00:00', '15:00:00', NULL, NULL),
    ( 3, 'Explore Nature', 'Leisure', 'Visit a nearby park and take a walk.', 'Todo', '22:00:00', '16:00:00', '17:00:00', NULL, NULL),
    ( 3, 'Sketching', 'Art', 'Sketch something creative for 45 minutes.', 'In Progress', '18:00:00', '13:00:00', '13:45:00', '13:00:00', NULL),
    ( 3, 'Cooking Challenge', 'Cooking', 'Try a new cooking recipe challenge.', 'Todo', '22:00:00', '19:30:00', '20:30:00', NULL, NULL);

INSERT INTO notifications ( UserID, TaskID, NotificationType, NotificationDate, Message)
VALUES
    (1, 1, 'Alert', ' 07:00:00', 'Task "Complete Project Proposal" will start within an hour.'),
    (1, 2, 'Reminder', '08:00:00', 'Reminder: Task "Prepare Presentation" is due today.'),
    (1, 3, 'Well Done', '08:00:00', 'Congratulations! Task "Exercise Routine" has been completed.'),
    (1, 5, 'Alert', '09:00:00', 'Task "Learning New Skill" will start within an hour.'),
    (2, 7, 'Alert', '17:00:00', 'Task "Cooking Experiment" will start within an hour.'),
    (2, 8, 'Reminder', '07:30:00', 'Reminder: you have to start task "Exercise Session" has started.'),
    (2, 10, 'Well Done', '09:00:00', 'Congratulations! Task "Write a Short Story" has been completed.'),
    (3, 11, 'Alert', '05:00:00', 'Task "Morning Jog" will start within an hour.'),
    (3, 14, 'Reminder', '12:00:00', 'Reminder: you have to start task "Sketching" within one hour.'),
    ( 3, 15, 'Alert', '18:30:00', 'Task "Cooking Challenge" will start within an hour.');
