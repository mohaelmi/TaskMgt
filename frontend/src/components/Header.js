import React from 'react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Profile from '../pages/Profile';
import TaskListItem from './taskListItem';
import TaskList from './TaskList';

const Header = () => {
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
          <TodayIcon>
            <RouterLink
              to='/'
              style={{ textDecoration: 'none', color: 'inherit' }}
            ></RouterLink>
          </TodayIcon>
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
              to='/'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              TaskMgt
            </RouterLink>
          </Typography>
          <div style={{ paddingLeft: '30%' }}>
            <Tab
              label='Analytics'
              component={RouterLink}
              to='/about'
              textColor='inherit'
            />
            <Tab
              label='My Tasks'
              component={RouterLink}
              to='/task'
              textColor='inherit'
            />
            {/* <Tab
              label='Profile'
              component={RouterLink}
              to='/profile'
              textColor='inherit'
            /> */}
          </div>
          {/* <Person2Icon href='#' sx={{ marginLeft: '1%' }} /> */}
          <Button
            sx={{ marginLeft: 'auto', color: 'black' }}
            variant='outlined'
            component={RouterLink}
            to='/login'
            // color='inherit'
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to='/signup'
            // color='inherit'
            sx={{ marginLeft: '20px', color: 'black' }}
            variant='outlined'
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </React.Fragment>
  );
};
export default Header;
