import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import NotificationsIcon from "@mui/icons-material/Notifications";
// import Modal from "./TaskDetailsModal";
// import moment from "moment";

const Notifications = (props) => {
  const openDialog = () => {
    if (props.countNotification) {
      props.toggleNotification(true);
    }
  };
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
          onClick={() => openDialog()}
        >
          <NotificationsIcon />
        </Badge>
      </div>
    </Box>
  );
};

const NotificationsContent = ({ task, timeDifference }) => {
  console.log(timeDifference);

  return (
    <section className=" border-b-gray-700 bg-red-200 flex flex-col items-start justify-end w-96 rounded-md p-2 mt-5">
      <div className="flex flex-row justify-around">
        <p>{`${task.title} will start in   ${timeDifference} minutes `}</p>
        {/* <button className="font-bold text-lg flex items-end justify-end">x</button> */}
      </div>
    </section>
  );
};

export { Notifications, NotificationsContent };
