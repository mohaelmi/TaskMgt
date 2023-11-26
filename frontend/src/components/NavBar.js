import TodayIcon from '@mui/icons-material/Today';
import { AppBar, Button, Tab, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

import {
  Route,
  Link as RouterLink,
  Routes,
  useNavigate,
} from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Analytics from '../pages/Analytics';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

const NavBar = ({ openModal, user, isLoggedIn, handleLogin, handleLogout }) => {
  useEffect(() => {
    window.location.pathname === '/' && window.location.replace('/login');
  }, []);

  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await handleLogout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response.data);
    }
  };

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
          <TodayIcon> </TodayIcon>
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
            }}
          >
            <RouterLink
              // to='/my_task'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              TaskMgt
            </RouterLink>
          </Typography>
          <div style={{ paddingLeft: '33%' }}>
            {isLoggedIn ? (
              <>
                <Tab
                  label='My Tasks'
                  component={RouterLink}
                  to='/my_task'
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
                  label='Analytics'
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
              </>
            ) : (
              <>
                <Tab
                  label='About Us'
                  component={RouterLink}
                  to='/about'
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
              </>
            )}
          </div>
          {isLoggedIn ? (
            <>
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

              <Typography
                style={{ marginLeft: '20%' }}
                sx={{
                  color: '#43270F',
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
                  marginLeft: '10px',
                }}
              />

              <Button
                sx={{
                  marginLeft: 'auto',
                  color: 'black',
                  borderRadius: '10px',
                }}
                variant='outlined'
                onClick={logoutUser}
              >
                Logout
              </Button>
            </>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              <Button
                sx={{
                  marginRight: '17px',
                  color: 'black',
                  borderRadius: '10px',
                }}
                variant='outlined'
                component={RouterLink}
                to='/login'

                // color='inherit'
              >
                Login
              </Button>

              <Button
                sx={{
                  color: 'black',
                  borderRadius: '10px',
                }}
                variant='outlined'
                component={RouterLink}
                to='/signup'

                // color='inherit'
              >
                SignUp
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path='/'
          element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/login'
          element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path='/my_task' element={<Analytics />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </React.Fragment>
  );
};
export default NavBar;
