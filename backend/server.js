// load .env data into process.env
// require("dotenv").config();
//const tasksQueries = require("./db/queries/tasks");
// Web server config
// const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require('cookie-session');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors")
const authRoutes = require('./routes/authRoutes');
const Routes = require('./routes/Routes');
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userQueries = require('./db/queries/userTask'); 

app.set('view engine', 'ejs');

app.use(morgan("dev"));
app.use(cors())
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1'],
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Passport configuration
passport.use(
  new LocalStrategy((email, password, done) => {
    userQueries
      .getUserByEmail(email)
      .then((user) => {
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userQueries
    .getUserById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.post('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logged out successfully' });
});

app.use('/auth', authRoutes);
app.use('/api/tasks', Routes);



app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
