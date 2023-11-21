const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/userTask');
const bcrypt = require('bcrypt');
//register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password

    const newUser = await userQueries.createUser(username, email, hashedPassword);
    res.status(200).json(newUser);
  } catch (error) {
    console.error('Error registering new user:', error);
    res.status(500).json({ error: 'Error registering new user' });
  }
});
// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userQueries.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      // Successfully logged in
      res.status(200).json({ message: 'Login successful', user });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Get user profile route
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  userQueries.getUserById(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Error fetching user profile' });
    });
});
module.exports = router;
