const express = require('express');
const { env } = require('./config/env');
const { routerApi } = require('./routes');

const {
  errorHandler,
  boomErrorHandler,
  sequelizeErrorHandler,
} = require('./middleware/error');

const app = express();
const port = env.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

routerApi(app);

app.use(sequelizeErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
