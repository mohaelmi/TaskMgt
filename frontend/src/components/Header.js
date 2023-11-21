import React from 'react';
import NavBar from './NavBar';

import { AuthProvider } from './AuthProvider';
import React from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import CreateTask from "../pages/CreateTask";


const Header = ({openModal}) => {

  return (
    <React.Fragment>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </React.Fragment>
  );
};
export default Header;
