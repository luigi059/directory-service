const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/userRoute");
const gameRouter = require("./routes/gameRoute");

// tells the location of our env file
dotenv.config({ path: './config.env' });

// Create a new express application named 'app'
const app = express();

// setting up mongodb connection string
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DB_PASSWORD
);
// connecting to mongodb
mongoose
.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('DB connection successful!'));

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Configure the CORs middleware
app.use(cors());

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// routes
app.use("/users", userRouter);
app.use("/games", gameRouter);

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));