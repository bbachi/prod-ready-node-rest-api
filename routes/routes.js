var express = require("express"),
    apiRouter = express();


apiRouter.use("/user", require('./user'));

module.exports = apiRouter;