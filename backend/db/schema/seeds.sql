INSERT INTO users (Username, Password, Email)
VALUES
    ( 'Sam', '$2b$10$vPWIM6ITCJnJQ1Lhf6KV2uEq8rwk/DnCI1f.46C6GM07FFwhMZCZe', 'sam@example.com'),
    ( 'Moha', '$2b$10$NC.NL6nD/HsOX7iDqVLIT.8JTUedj18Qqvjb4UZLjkB4t7rCHImRu', 'moha@example.com'),
    ( 'Ony', '$2b$10$bllTfrew/CYO5n9CrEhB5.fMykRWQGUWBC1io8i/cjnAE29DuY9Cy', 'ony@example.com');

INSERT INTO tasks (UserID, Title, Category, Description, Status, ImportanceLevel, EstimatedStartTime, duration, ActualStartTime, ActualEndTime)
VALUES
    (1, 'Read a Book', 'Self Improvement', 'Read a novel for relaxation.', 'Todo', 'Low', '19:00:00', '30', NULL, NULL),
    (1, 'Learning New Skill', 'Self Improvement', 'Spend an hour learning something new.', 'In Progress', 'Medium', '11:00:00', '25', NULL, NULL),
(1, 'Gardening', 'House Chores', 'Work in the garden for an hour.', 'Closed', 'Low', '09:00:00', '60','09:00:00', '11:00:00'),
    (1, 'Writing Journal', 'Self Improvement', 'Reflect and write in a journal.', 'Todo', 'Medium', '13:00:00', '20', NULL, NULL),
    (1, 'Music Practice', 'Leisure', 'Practice playing an instrument for 30 minutes.', 'In Progress', 'Low', '13:00:00', '30', '13:00:00', NULL),
    (1, 'Family Board Games', 'Family Time', 'Play board games with family.', 'Todo', 'High', '18:00:00', '60', NULL, NULL),
    
    (2, 'Read a Book', 'Leisure', 'Read the new novel for at least an hour.', 'Todo', 'Medium', '15:00:00', '45', NULL, NULL),
    (2, 'Cooking Experiment', 'Family Time', 'Try a new recipe for dinner tonight.', 'Closed', 'Low', '18:00:00', '60', '18:00:00', '19:00:00'),
    (2, 'Family Movie Night', 'Family Time', 'Watch a movie together as a family.', 'Todo', 'High', '20:00:00', '120', NULL, NULL),
    (2, 'Yoga Practice', 'Self Improvement', 'Do a 45-minute yoga session.', 'In Progress', 'Medium', '07:30:00', '45', '07:30:00', NULL),

    (3, 'Morning Jog', 'Self Improvement', 'Go for a 30-minute jog in the morning.', 'In Progress', 'Low', '06:00:00', '25', '06:00:00', NULL),
    (3, 'Learn Coding', 'Self Improvement', 'Practice coding for an hour.', 'Todo', 'High', '14:00:00', '20', NULL, NULL),
    (3, 'Painting Session', 'Leisure', 'Express creativity through painting.', 'Closed', 'High', '16:00:00', '45','16:00:00', '16:45:00'),
    (3, 'Family Dinner', 'Family Time', 'Have a family dinner together.', 'Todo', 'Medium', '19:00:00', '90', NULL, NULL);


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
