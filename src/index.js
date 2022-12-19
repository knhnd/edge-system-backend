'use strict';
const express = require('express');
const PreprocessingService = require('./services/PreprocessingService.js');

// create express app
const app = express();

// routing
app.get('/', (req, res) => {
  const data = { message: 'success', path: '/' };
  console.log(data);
  res.json('It Works!');
});

app.get('/test', async (req, res) => {
  const data = await PreprocessingService.test();
  res.json(data);
});

// Web Server (localhost)
app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000/');
});
