const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title:String,
    imageUrl:String,
    genres:[]
});

const Game = mongoose.model("Game",gameSchema);
module.exports = Game;