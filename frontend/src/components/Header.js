import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs, Button } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import Person2Icon from '@mui/icons-material/Person2';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <React.Fragment>
      <AppBar sx={{ background: 'white', color: 'black' }}>
        <Toolbar>
          <TodayIcon href='#' />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#'
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
            TaskMgt
          </Typography>
          <Tabs
            display='flex'
            justifyContent='center'
            textColor='inherit'
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor='primary'
            sx={{ paddingLeft: '30%' }}
          >
            <Tab label='About Us' />
            <Tab label='Contact' />
            <Tab label='Tasks' />
          </Tabs>
          <Person2Icon href='#' sx={{ marginLeft: '27%' }} />
          <Button
            sx={{ marginLeft: 'auto', color: 'black' }}
            variant='outlined'
          >
            Login
          </Button>
          <Button
            sx={{ marginLeft: '20px', color: 'black' }}
            variant='outlined'
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
