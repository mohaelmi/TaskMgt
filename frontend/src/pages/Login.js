import React from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    // Navigate to the signup page
    navigate('/signup');
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
            marginTop={5}
            variant='h4'
            textAlign='center'
          >
            Login to your Account
          </Typography>

          <TextField
            type={'email'}
            margin='normal'
            id='email'
            label='Enter your email'
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
              borderRadius: 3,
              backgroundColor: 'black',
              ':hover': { backgroundColor: 'darkGrey' },
            }}
          >
            Login
          </Button>

          <Typography
            variant='h4'
            sx={{
              color: 'Grey',
              fontSize: 18,
              marginTop: 2,
              marginBottom: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Login using &nbsp;{' '}
            <GoogleIcon
              fontSize='large'
              color='disabled'
              sx={{
                color: '#DB4437',
                marginRight: 1,
                ':hover': { color: 'darkred' },
              }}
            />
            <FacebookRoundedIcon
              fontSize='large'
              color='disabled'
              sx={{
                color: '#4267B2 ',
                ':hover': { color: 'darkblue' },
              }}
            />
          </Typography>

          <Typography
            marginTop={1}
            marginBottom={1}
            variant='p'
            textAlign='center'
            fontStyle={'oblique'}
            color='primary'
          >
            Don't have an account?
          </Typography>
          <Button
            variant='standard'
            sx={{
              borderRadius: 3,
              backgroundColor: ' #D9DDDC ',
              Color: 'black',
              ':hover': { backgroundColor: 'white' },
              fontWeight: 'bold',
              marginBottom: 5,
            }}
            onClick={handleSignupClick}
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
