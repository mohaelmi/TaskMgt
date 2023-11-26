import React, { useContext } from 'react';
import {
  Link as RouterLink,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Person2Icon from '@mui/icons-material/Person2';
import Analytics from '../pages/Analytics';
// import TaskList from './TaskList';
import AuthContext from './AuthProvider';
import logout from '../pages/Logout';

const NavBar = ({ openModal, userLogin, userLogOut, userSignup, user }) => {
  const handleLogout = () => {
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
          { user ? 
          <>
          <div style={{ paddingLeft: '20%' }}>
   
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
      : null }
        { !user ? 
        <>
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
          </>
        : 
          <Button
            sx={{ marginLeft: 'auto', color: 'black', borderRadius: '10px' }}
            variant='outlined'
            onClick={() => userLogOut()}
            // color='inherit'
            // onClick={logout}
          >
            Logout
          </Button>
           }

        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/signup' element={!user? <SignUp userSignup={userSignup} /> : null} />
        <Route path='/login' element={!user? <Login userLogin= {userLogin}/>  : null } />
        <Route path='/about' element={<AboutUs />} />
        {/* <Route path='/logout' element={<logout />} /> */}
        <Route path='/tasks' element={<AboutUs />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </React.Fragment>
  );
};
export default NavBar;
