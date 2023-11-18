import React, { useState } from 'react';
import { Link as RouterLink, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Tabs, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import AboutUs from '../pages/about';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: 'white',
          color: 'black',
          borderBottom: '1px solid #ccc',
          boxShadow: '0px 0px 2px #ccc',
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
            component='a'
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
          <Tabs
            textColor='inherit'
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor='primary'
            sx={{ paddingLeft: '30%' }}
          >
            <Tab label='About Us' component={RouterLink} to='/about-us' />
            <Tab label='Tasks' component={RouterLink} to='/tasks' />
            <Tab label='Profile' component={RouterLink} to='/profile' />
          </Tabs>
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
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </React.Fragment>
  );
};
export default Header;
