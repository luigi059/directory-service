const Game = require("../models/gameModel");
const User = require("../models/userModel");

exports.save = async(req,res,next) =>{
    console.log("welcome to the controller");
    try{
        let {user,gameName,gameImageUrl,gameGenre} = req.body;
/*         const existingGame = await Game.findOne({title:gameName});
        if (existingGame){
            return res
            .status(400)
            .json({ msg: "This game has already been saved!" });
        } */
        console.log(req.body.user.username);
        const gameData = {
            title:req.body.gameName,
            imageUrl:req.body.gameImageUrl,
            genres:req.body.gameGenre
        };
        const newGame = await Game.create(gameData);
        const updatedUser = await User.findOne({username:req.body.user.username});
        updatedUser.games.push(gameData);
        updatedUser.save();
        res.json(updatedUser);
        console.log("welcome to stage 3 of controller");
    } catch(err){
        res.status(500).json({ error: err.message });
    }
}