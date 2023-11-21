import React from 'react';
import { Button, CssBaseline } from '@mui/material';

const Logout = () => {
  return (
    <div style={{ paddingTop: '5%' }}>
      <CssBaseline />
      <form>
        <Button
          variant='contained'
          sx={{
            marginTop: 3,
            borderRadius: 3,
            backgroundColor: 'black',
            ':hover': { backgroundColor: 'darkGrey' },
          }}
        ></Button>
      </form>
    </div>
  );
};

export default Logout;
