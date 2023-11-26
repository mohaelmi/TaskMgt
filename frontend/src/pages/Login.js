import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [enteredValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(enteredValues);
    try {
      await props.handleLogin(enteredValues);
      navigate('/my_tasks');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setErrMsg('Login failed. Please check your credentials.');
    }
  };
  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };
  const handleSignupClick = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <div
      style={{
        // paddingTop: '8%',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <CssBaseline />
      <Box
        display='grid'
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr', '1fr 1fr']}
        gap={4}
        maxWidth={1000}
        // alignItems={'center'}
        justifyContent={'center'}
      >
        <section>
          <Typography
            variant='h2'
            mb={5}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            TaskMgt
          </Typography>
          <Typography variant='h5' marginBottom={5}>
            This app focuses on helping users manage and optimize their time for
            a more fulfilling and balanced life.
          </Typography>
          <Typography variant='h5'>Login to get started!</Typography>
        </section>

        <section>
          {props.isLoggedIn ? (
            <section>
              <h1>You are logged in!</h1>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live='assertive'
                style={{
                  color: 'red',
                  margin: '10px 0',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}
              >
                {errMsg}
              </p>
              <form onSubmit={handleSubmit}>
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
                  sx={{
                    backgroundColor: '#fcfbfc',
                    ':hover': { boxShadow: '10px 10px 20px #ccc' },
                  }}
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
                    ref={userRef}
                    label='Enter your email'
                    variant='outlined'
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    value={enteredValues.email}
                    required
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
                    required
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    value={enteredValues.password}
                    sx={{
                      width: '80%',
                    }}
                  />
                  <Button
                    type='submit'
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
                    SIGN IN
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
                    New user? Create an account
                  </Typography>
                  <Button
                    variant='standard'
                    sx={{
                      borderRadius: 3,
                      backgroundColor: 'white',
                      color: 'black', // Fix: Change Color to color
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}
                    onClick={handleSignupClick}
                  >
                    Sign Up
                  </Button>
                </Box>
              </form>
            </section>
          )}
        </section>
      </Box>
    </div>
  );
};

export default Login;
