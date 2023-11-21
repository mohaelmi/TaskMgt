const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log(req.body);

  // implement register logic
  return res.status(200).json(req.body);
});

router.post('/login', (req, res) => {
  console.log(req.body);

  // implement login logic
  return res.status(200).json(req.body);
});

module.exports = router;
