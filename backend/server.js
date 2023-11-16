// load .env data into process.env
// require("dotenv").config();
//const tasksQueries = require("./db/queries/tasks");
// Web server config
// const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require('cookie-session');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const taskRoutes = require('./routes/taskRoutes');
const cors = require("cors")
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 8080;
const app = express();

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

//api/tasks endpoint
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

// /api/users endpoint
//app.use("/users", userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
