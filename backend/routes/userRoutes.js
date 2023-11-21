const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/userTask');

// Register a new user
router.post('/register', (req, res) => {
  const { username,email, password } = req.body;

  userQueries.createUser(username,email, password)
    .then(newUser => {
      res.status(200).json(newUser);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error registering new user' });
    });
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
