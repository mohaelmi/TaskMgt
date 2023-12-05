import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { NotificationsContent } from "./NotificationsBellIcon";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function NotificationsModal({
  toggleNotification,
  notificationState,
  notificationElement,
  task,
  timeDifference,
}) {
  console.log(notificationElement);

  // if(notificationElement) {
  //   console.log("some niotification is there");
  // }
  return (
    <>
      {notificationElement && (
        <Dialog
          open={notificationState}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Notifications"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {notificationElement}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => toggleNotification(false)}>close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default NotificationsModal;
