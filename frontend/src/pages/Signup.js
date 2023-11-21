import React from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/login');
  };
  return (
    <div style={{ paddingTop: '5%' }}>
      <CssBaseline />
      <form>
        <Box
          display='flex'
          flexDirection={'column'}
          maxWidth={500}
          alignItems={'center'}
          justifyContent={'center'}
          margin='auto'
          marginTop={5}
          marginBottom={5}
          padding={3}
          borderRadius={2}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc' } }}
        >
          <Typography
            marginBottom={1}
            variant='h4'
            textAlign='center'
            marginTop={5}
          >
            Create an Account
          </Typography>

          <TextField
            type={'text'}
            margin='normal'
            id='username'
            label='UserName'
            variant='outlined'
            sx={{
              width: '80%',
            }}
          />
          <TextField
            type={'email'}
            margin='normal'
            id='email'
            label='Email'
            variant='outlined'
            sx={{
              width: '80%',
            }}
          />
          <TextField
            type={'password'}
            margin='normal'
            id='password'
            label='Password'
            variant='outlined'
            sx={{
              width: '80%',
            }}
          />
          <Button
            variant='contained'
            sx={{
              marginTop: 3,
              height: 50,
              backgroundColor: '#28282B',
              width: '80%',
              ':hover': { backgroundColor: '#0C0908' },

              fontWeight: 800,
              letterSpacing: '.3rem',
            }}
          >
            Sign Up
          </Button>

          <Typography
            textAlign='center'
            color='primary'
            sx={{
              marginTop: 2,
              fontStyle: 'italic',
              variant: 'p',
            }}
          >
            --- OR ---
          </Typography>

          <Button
            variant='standard'
            sx={{
              marginTop: 2,
              marginBottom: 5,
              borderRadius: 3,
              backgroundColor: ' #D9DDDC',
              Color: 'black',
              ':hover': { backgroundColor: 'white' },
              fontWeight: 'bold',
            }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
