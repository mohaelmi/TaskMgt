import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Modal from './TaskDetailsModal'
import moment from 'moment';

const Notifications = (props) => {
  const [count, setCount] = useState(1);
  

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };

  return (
    <Box
      sx={{
        color: 'active',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiBadge-root': {
          marginRight: 4,
        },
        cursor: "pointer"
      }}
    >
      <div>
        <Badge color="primary" badgeContent={count} onClick={()=> props.toggleNotification(!props.notificationState)}>
          {/* <Modal /> */}
          <NotificationsIcon   />
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
}


const NotificationsContent = ({tasks}) => {

  function getDateFromHours(time) {
    time = time.split(':');
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
  }

const remainingTime = tasks.map((task) => {
  return moment(getDateFromHours(task.estimatedstarttime)).fromNow() + ',';
})


const t = remainingTime.map((time, idx) => {
  return time.split(' ')[1], idx 
  console.log("time ", time[idx]);
});


  console.log("tasks :", t);
  return (
    <>
   <div>{remainingTime}, {t}</div>
   <div>NotificationContent</div>
   </>
   
  )
}


export {
  Notifications,
  NotificationsContent
}