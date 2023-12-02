import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Modal from "./TaskDetailsModal";
import moment from "moment";



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

const NotificationsContent = ({ notification }) => {
  console.log(notification);
  // function getDateFromHours(time) {
  //   time = time.split(":");
  //   let now = new Date();
  //   return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
  // }

  // const remainingTime = tasks.map((task) => {
  //   return moment(getDateFromHours(task.estimatedstarttime)).fromNow() + ",";
  // });

  // const t = remainingTime.map((time, idx) => {
  //   return time.split(" ")[1], idx;
  //   console.log("time ", time[idx]);
  // });

  // console.log("tasks :", t);
  return (
    <section className=" border-b-gray-700 bg-red-200 flex flex-col items-start justify-end w-96 rounded-md p-2">
     {notification.message}
      {/* <button className="inline">x</button> */}
    </section>
  );
};

export { Notifications, NotificationsContent };
