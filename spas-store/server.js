const express = require("express");
const bodyParser = require("body-parser");
var db = require("./client/src/Models/index");
const routes = require("./routes/api-routes.js");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


db.sequelize.sync({ force: true }).then(function () {
    // Start the API server
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
})

