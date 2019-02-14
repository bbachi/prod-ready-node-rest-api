const express = require('express');


const bodyParser = require('body-parser');


const logger = require('./logger/logger');


const app = express();


const port = 3070;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  logger.info('default route');
  res.send('App works!!!!!');
});

app.use('/api', require('./routes/routes'));

// request to handle undefined or all other routes
app.get('*', (req, res) => {
  logger.info('users route');
  res.send('App works!!!!!');
});

app.listen(port, (err) => {
  if (err) {
    logger.error('Error::', err);
  }
  logger.info(`running server on from port:::::::${port}`);
});
