import React from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';

const SignUp = () => {
  return (
    <div>
      <CssBaseline />
      <form>
        <Box
          display='flex'
          flexDirection={'column'}
          maxWidth={400}
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
          <Typography marginBottom={1} variant='h4' textAlign='center'>
            SignUp
          </Typography>

          <TextField
            type={'text'}
            margin='normal'
            id='outlined-basic'
            label='UserName'
            variant='outlined'
            sx={{
              width: '80%',
            }}
          />
          <TextField
            type={'email'}
            margin='normal'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            sx={{
              width: '80%',
            }}
          />
          <TextField
            type={'password'}
            margin='normal'
            id='outlined-basic'
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
            Submit
          </Button>

          <Button
            variant='standard'
            sx={{
              marginTop: 2,
              borderRadius: 3,
              Color: 'black',
              ':hover': { backgroundColor: 'lightGrey' },
              fontWeight: 'bold',
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
