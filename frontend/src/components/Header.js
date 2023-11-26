import React from 'react';
import NavBar from './NavBar';

import { AuthProvider } from './AuthProvider';

const Header = ({ openModal, userLogin, userLogOut, userSignup, user }) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <NavBar openModal={openModal}  userLogin ={userLogin} userLogOut={userLogOut} userSignup={userSignup} user={user}/>
      </AuthProvider>
    </React.Fragment>
  );
};
export default Header;
