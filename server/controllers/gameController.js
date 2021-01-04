const User = require("../models/userModel");

exports.save = async(req,res,next) =>{
    try{
        let {user,gameName,gameImageUrl,gameGenre} = req.body;
        const gameData = {
            title:req.body.gameName,
            imageUrl:req.body.gameImageUrl
        };
        const updatedUser = await User.findOne({username:req.body.user.username});
        for (let index = 0; index < updatedUser.games.length; index++) {
            const game = updatedUser.games[index];
            if(gameData.title==game.title){
                return res.status(400).json({msg:"This game has already been saved!"});
            }
        }
        updatedUser.games.push(gameData);
        updatedUser.save();
        res.json(updatedUser);
    } catch(err){
        res.status(500).json({ error: err.message });
    }
}
exports.getAllGames = async(req,res,next) =>{
    const username = req.param("user");
    console.log(username);
    const gamer = await User.findOne({username:username});
    res.json(gamer.games);
}