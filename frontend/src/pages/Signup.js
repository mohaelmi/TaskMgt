import React, { useRef, useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { use } from '../../../backend/routes/authRoutes';

const SignUp = () => {
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdMatch, setPwdMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd, pwdMatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log();
    // setUserEmail('');
    // setPwd('');
    // setSuccess(true);
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/login');
  };
  return (
    <div style={{ paddingTop: '5%' }}>
      <CssBaseline />
      <section>
        {' '}
        <p
          ref={errRef}
          className={errMsg ? 'errmsg' : 'offscreen'}
          aria-live='assertive'
        >
          {errMsg}
        </p>
      </section>

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
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            // value={user}
            required
            // aria-invalid={validName ? 'false' : 'true'}
            // aria-describedby='uidnote'
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
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
            ref={userRef}
            onChange={(e) => setEmail('email', e.target.value)}
            // value={user}
            required
            // aria-invalid={validName ? 'false' : 'true'}
            // aria-describedby='uidnote'
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
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
            onChange={(e) => setPwd('pwd', e.target.value)}
            // value={pwd}
            required
            // aria-invalid={validName ? 'false' : 'true'}
            // aria-describedby='uidnote'
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
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
