import React from 'react';
import NavBar from './NavBar';

const Header = ({ openModal }) => {
  return (
    <React.Fragment>
      <NavBar openModal={openModal} />
    </React.Fragment>
  );
};
export default Header;
