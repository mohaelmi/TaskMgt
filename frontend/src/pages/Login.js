import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  CssBaseline,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

const Login = ({ userLogin }) => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login', enteredValues);
    const { email, password } = enteredValues;
    userLogin(email, password);
    // navigate('/');
    // setUserEmail('');
    // setPwd('');
    // setSuccess(true);
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
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        marginLeft: '30px',
        marginRight: '30px',
        backgroundColor: 'white',
        // maxWidth: '100%',
      }}
    >
      <CssBaseline />
      <Box
        display='grid'
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr', '1fr 1fr']}
        gap={5}
        maxWidth={1200}
        justifyContent={'center'}
        sx={{
          gridTemplateAreas: {
            xs: "'content'",
            md: "'header content'",
          },
          backgroundColor: 'white',
        }}
      >
        <Paper
          elevation={0}
          marginRight={'3rem'}
          // padding={'4rem'}
          width={'80%'}
          margin={'auto'}
          sx={{
            gridArea: {
              xs: 'content',
              md: 'header',
            },
            display: 'flex',
            flexDirection: 'column',

            // alignItems: 'center',
            // // justifyContent: 'center',
          }}
        >
          <Typography
            variant='h2'
            mb={2}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              textDecoration: 'none',
            }}
          >
            Manage your <br />
            tasks <br />
            productivity
          </Typography>
          <Typography
            variant='h5'
            marginBottom={5}
            sx={{
              fontSize: '1.37rem',
            }}
          >
            TaskMgt helps you manage and optimize your time for a more
            fulfilling and balanced life.
          </Typography>
          <Button
            type='submit'
            variant='contained'
            onClick={handleSignupClick}
            sx={{
              marginTop: 3,
              height: 50,
              borderRadius: '15px 0 15px',
              background: [
                'rgb(63,95,159)',
                `radial-gradient(circle, rgba(63,95,159,1) 12%, rgba(167,195,227,1) 100%)`,
              ],
              width: '40%',
              fontWeight: 800,
              letterSpacing: '.2rem',
            }}
          >
            Get Started
          </Button>
        </Paper>
        <div
          sx={{
            gridArea: {
              xs: 'content',
            },
          }}
        >
          {success ? (
            <section>
              <h1>You are logged in!</h1>
            </section>
          ) : (
            <div>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live='assertive'
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
                  padding={'3rem'}
                  borderRadius={2}
                  boxShadow={'4px 5px 11px #ccc'}
                  sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc' } }}
                >
                  <Typography
                    marginBottom={2}
                    marginTop={1}
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
                      color: 'black',
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
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Login;
