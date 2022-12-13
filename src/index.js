'use strict';
const express = require('express');

// create express app
const app = express();

// routing
app.get('/', (req, res) => {
  const test = [{ message: 'It Works!' }];
  res.json(test);
});

// test
app.get(`/test`, (req, res) => {
  const test = [{ message: 'Success', Input: test}];
  res.json(test);
});

// Web Server (localhost)
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
