const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  console.log(req.body);

  // implement register logic
  return res.status(200).json(req.body);
});

app.post('/login', (req, res) => {
  console.log(req.body);

  // implement login logic
  return res.status(200).json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
