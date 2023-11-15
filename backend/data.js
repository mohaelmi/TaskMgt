const tasks = [  
    {  
        id: 1,
        userId: 5,
        type:       "doing laundry",   
        start_time:      "1:00pm",   
        duration:    "30 minutes",
        importance_level: "high"  
    },

    { 
      id: 2,
      userId: 5,
      type:       "cooking",   
      start_time:      "5:00pm",   
      duration:    "15 minutes",
      importance_level: "high"  
  }, 

  {  
    id: 3,
    userId: 8,
    type:       "watch movie",   
    start_time:      "7:00pm",   
    duration:    "45 minutes",
    importance_level: "low"  
  } 

  
 ]


const users = [
 {
    user_id: 1,
    name: "moha",
    password: "123"
  }

]


module.exports = {
  tasks, 
  users
}
