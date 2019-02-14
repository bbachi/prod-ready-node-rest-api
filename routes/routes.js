const express = require('express');


const apiRouter = express();


apiRouter.use('/user', require('./user'));

module.exports = apiRouter;
