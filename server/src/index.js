const express = require('express');
const { env } = require('./config/env');
const { routerApi } = require('./routes');

const app = express();
const port = env.port;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
