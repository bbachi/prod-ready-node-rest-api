var express = require("express"),
    bodyParser = require("body-parser"),
    logger = require('../logger/logger'),
    app = express();

// array to hold users
const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

// request to get all the users
app.get("/users", function(req, res) {
    logger.info("users route");
    res.json(users);
})

// request to get all the users by userName
app.get("/users/:userName", function(req, res) {
    logger.info("filter users by username:::::"+req.params.userName);
    let user = users.filter(function(user){
        if(req.params.userName === user.userName){
            return user;
        }
    })
    res.json(user);
})

// request to post the user
//req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post("/user", function(req, res) {
    users.push(req.body);
    res.json(users);
})

module.exports = app;