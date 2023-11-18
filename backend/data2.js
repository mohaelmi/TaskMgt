const usersData =[
    {
      "UserID": 1,
      "Username": "Sam",
      "Password": "123",
      "Email": "sam@example.com"
    },
    {
      "UserID": 2,
      "Username": "Moha",
      "Password": "456",
      "Email": "moha@example.com"
    },
    {
      "UserID": 3,
      "Username": "Ony",
      "Password": "789",
      "Email": "ony@example.com"
    }
  ]
  

  const tasksData = [
    {
        "TaskID": 1,
        "UserID": 1,
        "Title": "Complete Project Proposal",
        "Category": "Work",
        "Description": "Finish the project proposal by end of the day.",
        "Status": "In Progress",
        "PriorityLevel": "High",
        "ImportanceLevel": "High",
        "DueDate": "15:00:00",
        "EstimatedStartTime": "08:00:00",
        "EstimatedEndTime": "18:00:00",
        "ActualStartAt": "09:00:00",
        "ActualStartTime": null
    },
    {
        "TaskID": 2,
        "UserID": 1,
        "Title": "Prepare Presentation",
        "Category": "Work",
        "Description": "Create slides for the upcoming presentation.",
        "Status": "Todo",
        "PriorityLevel": "High",
        "ImportanceLevel": "Medium",
        "DueDate": "18:00:00",
        "EstimatedStartTime": "10:00:00",
        "EstimatedEndTime": "13:00:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 3,
        "UserID": 1,
        "Title": "Exercise Routine",
        "Category": "Health",
        "Description": "Follow the daily exercise routine for 30 minutes.",
        "Status": "Closed",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "Medium",
        "DueDate": "16:00:00",
        "EstimatedStartTime": "07:00:00",
        "EstimatedEndTime": "07:30:00",
        "ActualStartAt": "07:00:00",
        "ActualStartTime": "07:00:00"
    },
    {
        "TaskID": 4,
        "UserID": 1,
        "Title": "Read a Book",
        "Category": "Leisure",
        "Description": "Read a novel for relaxation.",
        "Status": "Todo",
        "PriorityLevel": "Low",
        "ImportanceLevel": "Low",
        "DueDate": "20:00:00",
        "EstimatedStartTime": "19:00:00",
        "EstimatedEndTime": "20:00:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 5,
        "UserID": 1,
        "Title": "Learning New Skill",
        "Category": "Education",
        "Description": "Spend an hour learning something new.",
        "Status": "In Progress",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "Medium",
        "DueDate": "11:00:00",
        "EstimatedStartTime": "11:00:00",
        "EstimatedEndTime": "12:00:00",
        "ActualStartAt": "11:00:00",
        "ActualStartTime": null
    },
    {
        "TaskID": 6,
        "UserID": 2,
        "Title": "Read a Book",
        "Category": "Leisure",
        "Description": "Read the new novel for at least an hour.",
        "Status": "Todo",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "Medium",
        "DueDate": "15:00:00",
        "EstimatedStartTime": "15:00:00",
        "EstimatedEndTime": "16:00:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 7,
        "UserID": 2,
        "Title": "Cooking Experiment",
        "Category": "Cooking",
        "Description": "Try a new recipe for dinner tonight.",
        "Status": "Closed",
        "PriorityLevel": "Low",
        "ImportanceLevel": "Low",
        "DueDate": "21:00:00",
        "EstimatedStartTime": "18:00:00",
        "EstimatedEndTime": "19:00:00",
        "ActualStartAt": "18:00:00",
        "ActualStartTime": "18:00:00"
    },
    {
        "TaskID": 8,
        "UserID": 2,
        "Title": "Exercise Session",
        "Category": "Health",
        "Description": "Workout for 40 minutes.",
        "Status": "In Progress",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "High",
        "DueDate": "18:00:00",
        "EstimatedStartTime": "07:30:00",
        "EstimatedEndTime": "08:10:00",
        "ActualStartAt": "07:30:00",
        "ActualStartTime": null
    },
    {
        "TaskID": 9,
        "UserID": 2,
        "Title": "Learning a Musical Instrument",
        "Category": "Hobby",
        "Description": "Practice guitar for 30 minutes.",
        "Status": "Todo",
        "PriorityLevel": "Low",
        "ImportanceLevel": "Medium",
        "DueDate": "19:00:00",
        "EstimatedStartTime": "12:00:00",
        "EstimatedEndTime": "12:30:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 10,
        "UserID": 2,
        "Title": "Write a Short Story",
        "Category": "Creative",
        "Description": "Draft a short story idea.",
        "Status": "Closed",
        "PriorityLevel": "High",
        "ImportanceLevel": "High",
        "DueDate": "22:00:00",
        "EstimatedStartTime": "09:00:00",
        "EstimatedEndTime": "10:00:00",
        "ActualStartAt": "09:00:00",
        "ActualStartTime": "09:30:00"
    },
    {
        "TaskID": 11,
        "UserID": 3,
        "Title": "Morning Jog",
        "Category": "Fitness",
        "Description": "Go for a 30-minute jog in the morning.",
        "Status": "In Progress",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "Low",
        "DueDate": "07:00:00",
        "EstimatedStartTime": "06:00:00",
        "EstimatedEndTime": "06:30:00",
        "ActualStartAt": "06:00:00",
        "ActualStartTime": null
    },
    {
        "TaskID": 12,
        "UserID": 3,
        "Title": "Learn Coding",
        "Category": "Education",
        "Description": "Practice coding for an hour.",
        "Status": "Todo",
        "PriorityLevel": "High",
        "ImportanceLevel": "High",
        "DueDate": "19:00:00",
        "EstimatedStartTime": "14:00:00",
        "EstimatedEndTime": "15:00:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 13,
        "UserID": 3,
        "Title": "Explore Nature",
        "Category": "Leisure",
        "Description": "Visit a nearby park and take a walk.",
        "Status": "Todo",
        "PriorityLevel": "Low",
        "ImportanceLevel": "Low",
        "DueDate": "22:00:00",
        "EstimatedStartTime": "16:00:00",
        "EstimatedEndTime": "17:00:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    },
    {
        "TaskID": 14,
        "UserID": 3,
        "Title": "Sketching",
        "Category": "Art",
        "Description": "Sketch something creative for 45 minutes.",
        "Status": "In Progress",
        "PriorityLevel": "Medium",
        "ImportanceLevel": "Medium",
        "DueDate": "18:00:00",
        "EstimatedStartTime": "13:00:00",
        "EstimatedEndTime": "13:45:00",
        "ActualStartAt": "13:00:00",
        "ActualStartTime": null
    },
    {
        "TaskID": 15,
        "UserID": 3,
        "Title": "Cooking Challenge",
        "Category": "Cooking",
        "Description": "Try a new cooking recipe challenge.",
        "Status": "Todo",
        "PriorityLevel": "High",
        "ImportanceLevel": "Medium",
        "DueDate": "22:00:00",
        "EstimatedStartTime": "19:30:00",
        "EstimatedEndTime": "20:30:00",
        "ActualStartAt": null,
        "ActualStartTime": null
    }
];
const notifications = [
    {
        "NotificationID": 1,
        "UserID": 1,
        "TaskID": 1,
        "NotificationType": "Alert",
        "NotificationDate": "07:00:00",
        "Message": "Task 'Complete Project Proposal' will start within an hour."
    },
    {
        "NotificationID": 2,
        "UserID": 1,
        "TaskID": 2,
        "NotificationType": "Reminder",
        "NotificationDate": "08:00:00",
        "Message": "Reminder: Task 'Prepare Presentation' is due today."
    },
    {
        "NotificationID": 3,
        "UserID": 1,
        "TaskID": 3,
        "NotificationType": "Well Done",
        "NotificationDate": "08:00:00",
        "Message": "Congratulations! Task 'Exercise Routine' has been completed."
    },
    {
        "NotificationID": 4,
        "UserID": 1,
        "TaskID": 5,
        "NotificationType": "Alert",
        "NotificationDate": "09:00:00",
        "Message": "Task 'Learning New Skill' will start within an hour."
    },
    {
        "NotificationID": 5,
        "UserID": 2,
        "TaskID": 7,
        "NotificationType": "Alert",
        "NotificationDate": "17:00:00",
        "Message": "Task 'Cooking Experiment' will start within an hour."
    },
    {
        "NotificationID": 6,
        "UserID": 2,
        "TaskID": 8,
        "NotificationType": "Reminder",
        "NotificationDate": "07:30:00",
        "Message": "Reminder: you have to start task 'Exercise Session' has started."
    },
    {
        "NotificationID": 7,
        "UserID": 2,
        "TaskID": 10,
        "NotificationType": "Well Done",
        "NotificationDate": "09:00:00",
        "Message": "Congratulations! Task 'Write a Short Story' has been completed."
    },
    {
        "NotificationID": 8,
        "UserID": 3,
        "TaskID": 11,
        "NotificationType": "Alert",
        "NotificationDate": "05:00:00",
        "Message": "Task 'Morning Jog' will start within an hour."
    },
    {
        "NotificationID": 9,
        "UserID": 3,
        "TaskID": 14,
        "NotificationType": "Reminder",
        "NotificationDate": "12:00:00",
        "Message": "Reminder: you have to start task 'Sketching' within one hour."
    },
    {
        "NotificationID": 10,
        "UserID": 3,
        "TaskID": 15,
        "NotificationType": "Alert",
        "NotificationDate": "18:30:00",
        "Message": "Task 'Cooking Challenge' will start within an hour."
    }
];

  module.exports = {
    usersData,
    tasksData, 
    notifications
  }