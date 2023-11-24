
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const Routes = require('./routes/Routes');
const PORT = process.env.PORT || 8080;
const app = express();
const userQueries = require('./db/queries/userTask');


app.use(morgan('dev'));
app.use(cors());
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(
  session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
  })
);
// Register a new user
app.post('/register', (req, res) => {
  const { username,email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password

  try {
    // Call the createUser query function to add a new user to the database
    const newUser = userQueries.createUser(username, email, hashedPassword);
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});
// userQueries.hashExistingUsersPasswords();
// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userQueries.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});


// Logout route
// app.post('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).json({ message: 'Logout failed' });
//     }
//     // res.json({ message: 'Logged out successfully' });
//     res.redirect('/login');
//   });
// });

app.get('/logout', (req, res) => {
  const id = req.session.userId
  if(id){
    req.session.userId = null;
    //res.render("index", {user: null});
    // res.redirect('/login');
    res.json({messge: "logout"})
    // res.redirect('/login');

  }else {
    res.json({messge: "already log out"})
  }

});

// Protected route - example
app.get('/protected', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ message: 'Welcome to the protected route' });
})
//routes
app.use('/auth', authRoutes);
app.use('/api/tasks', Routes);


// Server listening
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

