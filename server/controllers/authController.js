const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req,res,next) => {
    try {
        let { username,password } = req.body;
        // 1) validation
        if (!username || !password) return res.status(400).json({ msg: "Not all fields have been entered." });
        // 2) checking for existing users
        const existingUser = await User.findOne({ username: username });
        if (existingUser){
            return res
            .status(400)
            .json({ msg: "An account with this username already exists." });
        }
        // 3) if everything is ok create a new user
        const newUser = await User.create({
            username:req.body.username,
            password:req.body.password
        });
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.login = async (req, res, next) => {
    try{
        const { username, password } = req.body;
        // 1) validation
        if (!username || !password) return res.status(400).json({ msg: "Not all fields have been entered." });
        // 2) Check if user exists && password is correct
        const user = await User.findOne({ username }).select('+password');
        if (!user && (password != user.password)) {
            return res
            .status(400)
            .json({ msg: "No account with this username has been registered." });
        }
        // 3) If everything ok, create a jwt token and send user data to client
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
            },
        });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};
// checks and verifies token
exports.tokenValidation = async (req,res) => {
    try{
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);
    
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
    
        return res.json(true);
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};
// once token is valid, client makes a request which activates this controller which returns user data
exports.getUser = async (req,res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });
};