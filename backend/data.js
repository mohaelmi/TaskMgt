const tasksData = [  
    {  
      id: 1,
      userId: 5,
      title:       "doing laundry",  
      description: "details for the task", 
      start_time:      "1:00pm",   
      duration:    "30 minutes",
      importance_level: "high",
      status: "todos"
    },

    {  
      id: 2,
      userId: 5,
      title:       "cleaning",  
      description: "details for the task", 
      start_time:      "1:00pm",   
      duration:    "30 minutes",
      importance_level: "high",
      status: "todos"
    },

    {  
      id: 3,
      userId: 5,
      title:       "gym",  
      description: "details for the task", 
      start_time:      "1:00pm",   
      duration:    "30 minutes",
      importance_level: "high",
      status: "todos"
    },

    { 
      id: 4,
      userId: 1,
      title:       "cooking",
      description: "details for the task", 
      start_time:      "5:00pm",   
      duration:    "15 minutes",
      importance_level: "high",
      status: "progress"
  }, 

  {  
    id: 5,
    userId: 8,
    title:       "watch movie",
    description: "details for the task",   
    start_time:      "7:00pm",   
    duration:    "45 minutes",
    importance_level: "low",
    status: "done"  
  } 

  
 ]


const usersData = [
 {
    user_id: 1,
    name: "moha",
    password: "123"
  }

]


module.exports = {
  tasksData, 
  usersData
}
