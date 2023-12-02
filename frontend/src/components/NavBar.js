import React from 'react';
import { Link as RouterLink, Route, Routes, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import Analytics from '../pages/Analytics';
import Avatar from '@mui/material/Avatar';
import { Notifications } from './Notifications';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = ({
  openModal,
  userLogin,
  userLogOut,
  userSignup,
  user,
  taskCategoryPie,
  taskStatusPie,
  toggleNotification,
  notificationState,
  tasktimelineData,
  countNotification
}) => {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: 'white',
          color: 'black',
          borderBottom: '1px solid #ccc',
          boxShadow: '0px 0px 4px #ccc',
          height: '60px',
        }}
      >
        <Toolbar>
          <TodayIcon />
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              ml: 1,
            }}
          >
            <RouterLink
              to='/'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              TaskMgt
            </RouterLink>
          </Typography>
          {user ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                paddingLeft: 'auto',
              }}
            >
            
              {/* <div> */}
              <Tab
                label='My Tasks'
                component={RouterLink}
                to='/'
                textColor='inherit'
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',

                  '&:hover': {
                    fontSize: '1.0rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  },
                }}
              />

              <Tab
                label='Summary'
                component={RouterLink}
                to='/summary'
                textColor='inherit'
                sx={{
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    fontSize: '1.0rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  },
                }}
              />
              {/* </div> */}
              <Button
                variant='text'
                textColor='inherit'
                onClick={() => openModal()}
                sx={{
                  color: '#656565',
                  textTransform: 'none',
                  marginLeft: '12px',
                  marginTop: '2px',
                  fontSize: '1rem',
                  '&:hover': {
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  },
                }}
              >
                Add Task
              </Button>
            </div>
          ) : null}
          {!user ? (
            <>
              <Button
                sx={{
                  marginLeft: 'auto',
                  color: 'black',
                  borderRadius: '10px',
                }}
                variant='outlined'
                component={RouterLink}
                to='/login'
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to='/signup'
                sx={{
                  marginLeft: '20px',
                  color: 'black',

                  borderRadius: '10px',
                  backgroundColor: '#accbff',
                  '&:hover': {
                    backgroundColor: '#92bbff',
                  },
                }}
                variant='soft'
              >
                Sign Up
              </Button>
            </>
          ) : (
            <section
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                paddingLeft: 'auto',
              }}
            >
              
              <Typography
                sx={{
                  color: 'inherit',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  marginTop: '4px',
                  fontSize: '1rem',
                  marginRight: '5px',
                }}
              >
              {user.username}
              </Typography>
              <Avatar
                variant='solid'
                sx={{
                  width: '32px',
                  height: '32px',
                  marginRight: '30px',
                }}
              />

              <Notifications countNotification={countNotification} notificationState={notificationState} toggleNotification={toggleNotification}/>
              <Button
                sx={{
                  marginLeft: 'auto',
                  color: 'black',
                  borderRadius: '10px',
                }}
                variant='outlined'
                onClick={() => userLogOut()}
              >
                Logout
              </Button>
            </section>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path='/signup'
          element={!user ? <SignUp userSignup={userSignup} /> : null}
        />
        <Route path='/my_task' element={<Navigate to='/' />} />
        <Route
          path='/login'
          element={!user ? <Login userLogin={userLogin} /> : null}
        />
        <Route
          path='/summary'
          element={
            <Analytics
              categoryCounts={taskCategoryPie}
              statusCounts={taskStatusPie}
              tasktimelineData={tasktimelineData}
            />
          }
        />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </React.Fragment>
  );
};

export default NavBar;
