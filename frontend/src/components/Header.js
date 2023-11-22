import React from 'react';
import NavBar from './NavBar';

import { AuthProvider } from './AuthProvider';

const Header = ({ openModal }) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <NavBar openModal={openModal} />
      </AuthProvider>
    </React.Fragment>
  );
};
export default Header;
