import React from 'react';
import { Link as RouterLink, Route, Routes, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Person2Icon from '@mui/icons-material/Person2';
// import Logout from '../pages/Logout';
import Analytics from '../pages/Analytics';
import TaskList from './TaskList';

const NavBar = ({ openModal, userLogin, userLogOut, userSignup }) => {
  const logout = () => {
    userLogOut()
    Navigate('/login')

  }
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
              to='/'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              TaskMgt
            </RouterLink>
          </Typography>
          <div style={{ paddingLeft: '20%' }}>
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

            <Tab
              label='My Tasks'
              component={RouterLink}
              to='/task'
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

            <Person2Icon
              href='#'
              // sx={{ marginLeft: '1%' }}
              label='Profile'
              component={RouterLink}
              to='/profile'
              textColor='inherit'
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

          <Button
            sx={{ marginLeft: 'auto', color: 'black', borderRadius: '10px' }}
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
            sx={{ marginLeft: '20px', color: 'black', borderRadius: '10px' }}
            variant='outlined'
          >
            SignUp
          </Button>

          <Button
            sx={{ marginLeft: 'auto', color: 'black', borderRadius: '10px' }}
            variant='outlined'
            component={RouterLink}
            to='/logout'
            // color='inherit'
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/signup' element={<SignUp userSignup={userSignup} />} />
        <Route path='/login' element={<Login userLogin= {userLogin}/>} />
        <Route path='/about' element={<AboutUs />} />
        {/* <Route path='/logout' element={<Logout />} /> */}
         <Route path='/' element={ <TaskList    />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </React.Fragment>
  );
};
export default NavBar;
