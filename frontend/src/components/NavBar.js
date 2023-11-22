import React from "react";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Person2Icon from "@mui/icons-material/Person2";
import Logout from "../pages/Logout";
import Analytics from "../pages/Analytics";

const BeforeLogin = ({openModal}) => {
  const { isLoggedIn } = useAuth();
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <AppBar
        sx={{
          background: "white",
          color: "black",
          borderBottom: "1px solid #ccc",
          boxShadow: "0px 0px 4px #ccc",
          height: "60px",
        }}
      >
        <Toolbar>
          <TodayIcon> </TodayIcon>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              TaskMgt
            </RouterLink>
          </Typography>
          <div style={{ paddingLeft: "30%" }}>
            <Tab
              label="About Us"
              component={RouterLink}
              to="/about"
              textColor="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  fontSize: "1.0rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                },
              }}
            />

            <Tab
              label="My Tasks"
              component={RouterLink}
              to="/task"
              textColor="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",

                "&:hover": {
                  fontSize: "1.0rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                },
              }}
            />

            <Tab
              label="Analytics"
              component={RouterLink}
              to="/analytics"
              textColor="inherit"
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  fontSize: "1.0rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                },
              }}
            />

            <button onClick={() => openModal(true)} textColor="inherit">
              Add Task
            </button>

            <Person2Icon
              href="#"
              // sx={{ marginLeft: '1%' }}
              label="Profile"
              component={RouterLink}
              to="/profile"
              textColor="inherit"
            />
          </div>

          <Button
            sx={{ marginLeft: "auto", color: "black", borderRadius: "10px" }}
            variant="outlined"
            component={RouterLink}
            to="/login"
            // color='inherit'
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/signup"
            // color='inherit'
            sx={{ marginLeft: "20px", color: "black", borderRadius: "10px" }}
            variant="outlined"
          >
            SignUp
          </Button>

          <Button
            sx={{ marginLeft: "auto", color: "black", borderRadius: "10px" }}
            variant="outlined"
            component={RouterLink}
            to="/logout"
            // color='inherit'
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<AboutUs />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </React.Fragment>
  );
};
export default BeforeLogin;
