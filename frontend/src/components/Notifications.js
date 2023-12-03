import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import NotificationsIcon from "@mui/icons-material/Notifications";
// import Modal from "./TaskDetailsModal";
// import moment from "moment";



const Notifications = (props) => {
  const [count, setCount] = useState(1);

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };

  return (
    <Box
      sx={{
        color: "active",
        display: "flex",
        flexDirection: "column",
        "& .MuiBadge-root": {
          marginRight: 4,
        },
        cursor: "pointer",
      }}
    >
      <div>
        <Badge
          color="error"
          badgeContent={props.countNotification}
          onClick={() => props.toggleNotification(!props.notificationState)}
        >
          {/* <Modal /> */}
          <NotificationsIcon />
        </Badge>
      </div>

      {/* <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </div> */}
    </Box>
  );
};

const NotificationsContent = ({ task, timeDifference }) => {
  




 


  
  return (
    <section className=" border-b-gray-700 bg-red-200 flex flex-col items-start justify-end w-96 rounded-md p-2">
   
     {`${task.title} will start in   ${timeDifference}`}
    {/* <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg> */}
      {/* <button className="inline">x</button> */}
    </section>
  );
};

export { Notifications, NotificationsContent };

// const timeDifferenceInMinutes = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).format("mm")