const mongoose = require("mongoose");
const Game = require("./gameModel").schema;

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    games:[Game]
});

const User = mongoose.model('User',userSchema);
module.exports = User;