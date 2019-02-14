var express = require("express"),
    bodyParser = require("body-parser"),
    logger = require('./logger/logger'),
    app = express(),
    port = 3070;

app.use(bodyParser.json());

app.get("/", function(req, res) {
    logger.info("default route");
    res.send("App works!!!!!");
})

app.use("/api", require("./routes/routes"));

// request to handle undefined or all other routes
app.get("*", function(req, res) {
    logger.info("users route");
    res.send("App works!!!!!");
})

app.listen(port, function(err) {
    logger.info("running server on from port:::::::" + port);
});