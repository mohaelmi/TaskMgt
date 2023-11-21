import React from 'react';
import NavBar from './NavBar';

import { AuthProvider } from './AuthProvider';

const Header = () => {
  return (
    <React.Fragment>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </React.Fragment>
  );
};
export default Header;
