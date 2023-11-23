import React from 'react';
import NavBar from './NavBar';

import { AuthProvider } from './AuthProvider';

const Header = ({ openModal, userLogin, userLogOut, userSignup }) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <NavBar openModal={openModal}  userLogin ={userLogin} userLogOut={userLogOut} userSignup={userSignup}/>
      </AuthProvider>
    </React.Fragment>
  );
};
export default Header;
