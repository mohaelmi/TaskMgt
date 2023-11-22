// load .env data into process.env
// require("dotenv").config();
//const tasksQueries = require("./db/queries/tasks");
// Web server config
// const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require("cookie-session");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const Routes = require("./routes/Routes");
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUserByEmail, createUser } = require("./db/queries/userTask");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(cors());
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);
// app.use(passport.initialize());
app.use(passport.session());
// Passport configuration
// passport.use(
//   new LocalStrategy((email, password, done) => {
//     userQueries
//       .getUserByEmail(email)
//       .then((user) => {
//         if (!user || !bcrypt.compareSync(password, user.password)) {
//           return done(null, false);
//         }
//         return done(null, user);
//       })
//       .catch((err) => done(err));
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   userQueries
//     .getUserById(id)
//     .then((user) => {
//       done(null, user);
//     })
//     .catch((err) => done(err));
// });

// app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

// app.post('/logout', (req, res) => {
//   req.logout();
//   res.json({ message: 'Logged out successfully' });
// });

app.use("/auth", authRoutes);
app.use("/api/tasks", Routes);

app.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  // req.session.user_id = userId;
  // res.redirect("/");
  // console.log(userId);
  getUserByEmail(email)
    .then((user) => {
      // if(!user || !(bcrypt.compare(password, user.password))) {
      //   res.status(401).json({ error: 'Invalid credentials' });
      // }else {
      // console.log('login', user);
      req.session.user_id = user.id;
      console.log("session id", req.session.user_id);
      // res.redirect(`/api/tasks/${user.id}`);
      res.json({ user, user_id: req.session.user_id });
      // }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  createUser(username, email, password)
    .then((user) => {
      console.log("signup", user);
      req.session.user_id = user.id;
      res.json({ user, user_id: req.session.user_id });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/logout", (req, res) => {
  req.session.user_id = null;
  //res.render("index", {user: null});
  res.redirect("/login");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
