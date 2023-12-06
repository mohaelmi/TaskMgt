import React, { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import NotificationsIcon from "@mui/icons-material/Notifications";
// import Modal from "./TaskDetailsModal";
// import moment from "moment";

//
function NotificationsBellIcon (props) {
  console.log(props.countNotification);
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


export default NotificationsBellIcon
