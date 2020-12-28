const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// signing up users with the use of json web token
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};
// creating token
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);
    // sending data 
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
    
    // Remove password from output
    user.password = undefined;
}

exports.register = async (req,res,next) => {
    const newUser = await User.create({
        username:req.body.username,
        password:req.body.password
    });
    createSendToken(newUser, 201, req, res);
};
exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    // 1) Check if email and password exist
    if (!username || !password) {
        console.log('Please provide email and password!');
    } 
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ username }).select('+password');
    if (!user && (password != user.password)) {
        console.log('Incorrect email or password');
    }
    // 3) If everything ok, send token to client
    createSendToken(user, 200, req, res);
    console.log("login success");
};