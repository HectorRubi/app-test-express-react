const express = require('express');
const { env } = require('./config/env');
const app = express();
const port = env.port;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
