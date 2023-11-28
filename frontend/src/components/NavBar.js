import React from 'react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import Analytics from '../pages/Analytics';
import Avatar from '@mui/material/Avatar';

// ... (imports remain the same)

const NavBar = ({ openModal, userLogin, userLogOut, userSignup, user }) => {
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
            <>
              <div style={{ paddingLeft: '33%' }}>
                <Tab
                  label='Summary'
                  component={RouterLink}
                  to='/analytics'
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
              </div>
              <Button
                variant='text'
                textColor='inherit'
                onClick={() => openModal(true)}
                sx={{
                  color: '#656565',
                  textTransform: 'none',
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
            </>
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
            <>
              <Typography
                sx={{
                  marginLeft: '25%',
                  color: '#5474d2',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  marginTop: '4px',
                  fontSize: '1rem',
                }}
              >
                Welcome: {user.username}
              </Typography>
              <Avatar
                variant='solid'
                sx={{
                  width: '32px',
                  height: '32px',
                  marginLeft: '8px',
                }}
              />
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
            </>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path='/signup'
          element={!user ? <SignUp userSignup={userSignup} /> : null}
        />
        <Route
          path='/login'
          element={!user ? <Login userLogin={userLogin} /> : null}
        />
        <Route path='/analytics' element={<Analytics />} />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </React.Fragment>
  );
};

export default NavBar;
