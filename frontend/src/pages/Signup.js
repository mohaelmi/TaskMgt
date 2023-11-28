import React, { useRef, useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ userSignup }) => {
  const navigate = useNavigate();
  const userRef = useRef();
  const emailRef = useRef();
  const [enteredValues, setEnteredValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [enteredValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredValues);

    userSignup(enteredValues);
    setSuccess(true);
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div style={{ paddingTop: '8%', minHeight: '100vh' }}>
      <CssBaseline />
      {success ? (
        <section>
          <h1>You are logged in!</h1>
        </section>
      ) : (
        <section>
          <p
            ref={emailRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
        </section>
      )}

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
          sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc' } }}
        >
          <Typography
            variant='h4'
            textAlign='center'
            marginTop={5}
            marginBottom={1}
          >
            Create an Account
          </Typography>

          <TextField
            type='text'
            margin='normal'
            id='username'
            label='Username'
            variant='outlined'
            fullWidth
            inputRef={userRef}
            onChange={(e) => handleInputChange('username', e.target.value)}
            required
          />

          <TextField
            type='email'
            margin='normal'
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            inputRef={emailRef}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />

          <TextField
            type='password'
            margin='normal'
            id='password'
            label='Password'
            variant='outlined'
            fullWidth
            onChange={(e) => handleInputChange('password', e.target.value)}
            required
          />

          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{
              marginTop: 3,
              height: 50,
              backgroundColor: '#28282B',
              borderRadius: 3,
              // width: '80%',
              '&:hover': { backgroundColor: '#1a1817' },
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
              backgroundColor: '#D9DDDC',
              color: 'black',
              '&:hover': { backgroundColor: 'white' },
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
