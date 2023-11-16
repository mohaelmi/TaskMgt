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
  

const tasksData =[
    {
      "TaskID": 1,
      "UserID": 1,
      "Title": "Complete Project Proposal",
      "Category": "Work",
      "Description": "Finish the project proposal by end of the day.",
      "Status": "In Progress",
      "PriorityLevel": "High",
      "ImportanceLevel": "High",
      "DueDate": "2023-11-15"
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
      "DueDate": "2023-11-18"
    },
    {
      "TaskID": 3,
      "UserID": 1,
      "Title": "Exercise Routine",
      "Category": "Health",
      "Description": "Follow the daily exercise routine for 30 minutes.",
      "Status": "In Progress",
      "PriorityLevel": "Medium",
      "ImportanceLevel": "Medium",
      "DueDate": "2023-11-16"
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
      "DueDate": "2023-11-20"
    },
    {
      "TaskID": 5,
      "UserID": 1,
      "Title": "Learning New Skill",
      "Category": "Education",
      "Description": "Spend an hour learning something new.",
      "Status": "Todo",
      "PriorityLevel": "Medium",
      "ImportanceLevel": "Medium",
      "DueDate": "2023-11-17"
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
      "DueDate": "2023-11-20"
    },
    {
      "TaskID": 7,
      "UserID": 2,
      "Title": "Cooking Experiment",
      "Category": "Cooking",
      "Description": "Try a new recipe for dinner tonight.",
      "Status": "Todo",
      "PriorityLevel": "Low",
      "ImportanceLevel": "Low",
      "DueDate": "2023-11-21"
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
      "DueDate": "2023-11-18"
    },
    {
      "TaskID": 9,
      "UserID": 3,
      "Title": "Morning Jog",
      "Category": "Fitness",
      "Description": "Go for a 30-minute jog in the morning.",
      "Status": "In Progress",
      "PriorityLevel": "Medium",
      "ImportanceLevel": "Low",
      "DueDate": "2023-11-16"
    },
    {
      "TaskID": 10,
      "UserID": 3,
      "Title": "Learn Coding",
      "Category": "Education",
      "Description": "Practice coding for an hour.",
      "Status": "Todo",
      "PriorityLevel": "High",
      "ImportanceLevel": "High",
      "DueDate": "2023-11-19"
    },
    {
      "TaskID": 11,
      "UserID": 3,
      "Title": "Explore Nature",
      "Category": "Leisure",
      "Description": "Visit a nearby park and take a walk.",
      "Status": "Todo",
      "PriorityLevel": "Low",
      "ImportanceLevel": "Low",
      "DueDate": "2023-11-22"
    }
  ]
  

const notifications = [
    {
      "NotificationID": 1,
      "UserID": 1,
      "TaskID": 1,
      "NotificationType": "Reminder",
      "NotificationDate": "2023-11-14T09:00:00",
      "Message": "Don't forget to complete the project proposal!"
    },
    {
      "NotificationID": 2,
      "UserID": 1,
      "TaskID": 3,
      "NotificationType": "Reminder",
      "NotificationDate": "2023-11-16T06:30:00",
      "Message": "Time for your exercise routine!"
    },
    {
      "NotificationID": 3,
      "UserID": 1,
      "TaskID": 5,
      "NotificationType": "Alert",
      "NotificationDate": "2023-11-17T09:00:00",
      "Message": "Reminder: Spend time learning something new today!"
    },
    {
      "NotificationID": 4,
      "UserID": 1,
      "TaskID": 4,
      "NotificationType": "Alert",
      "NotificationDate": "2023-11-20T18:00:00",
      "Message": "Reminder: Time to relax with a book!"
    },
    {
      "NotificationID": 5,
      "UserID": 2,
      "TaskID": 6,
      "NotificationType": "Reminder",
      "NotificationDate": "2023-11-19T18:00:00",
      "Message": "Reminder: Start reading the new novel today!"
    },
    {
      "NotificationID": 6,
      "UserID": 2,
      "TaskID": 7,
      "NotificationType": "Alert",
      "NotificationDate": "2023-11-20T16:00:00",
      "Message": "Time to start preparing dinner!"
    },
    {
      "NotificationID": 7,
      "UserID": 2,
      "TaskID": 8,
      "NotificationType": "Reminder",
      "NotificationDate": "2023-11-18T16:00:00",
      "Message": "Don't forget your workout session!"
    },
    {
      "NotificationID": 8,
      "UserID": 3,
      "TaskID": 9,
      "NotificationType": "Reminder",
      "NotificationDate": "2023-11-15T08:00:00",
      "Message": "Don't forget your morning jog!"
    },
    {
      "NotificationID": 9,
      "UserID": 3,
      "TaskID": 10,
      "NotificationType": "Alert",
      "NotificationDate": "2023-11-19T18:00:00",
      "Message": "Time to start practicing coding!"
    },
    {
      "NotificationID": 10,
      "UserID": 3,
      "TaskID": 11,
      "NotificationType": "Alert",
      "NotificationDate": "2023-11-21T14:00:00",
      "Message": "Take a walk in the park today!"
    }
  ]
  module.exports = {
    usersData,
    tasksData, 
    notifications
  }