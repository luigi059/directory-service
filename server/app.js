const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create a new express application named 'app'
const app = express();
// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Configure the CORs middleware
app.use(cors());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the backend!" });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));