
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config();

const secretKey = process.env.JWT_ACCESS_KEY;

const authController = {
    //register
    registerUser: async(req,res,next)=>{
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);

            const newUser = await new User({
                username: req.body.username,
                email:req.body.email,
                password:hashed,
                gold:req.body.gold
            });
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //login
    loginUser: async(req,res,next)=>{
        try {
            const user = await User.findOne({username:req.body.username});
            if(!user){
                res.status(404).json("Wrong username!");

            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(!validPassword){
                res.status(404).json("Wrong passord!");
            }
            if(user && validPassword){
                const AccessToken = jwt.sign({
                    id: user.id,
                    admin: user.admin
                },secretKey,
                {expiresIn:"90s"}
                )
                //dont show password
                const {password,...others} = user._doc;
                res.status(200).json({user,AccessToken});
            };
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
}
module.exports = authController;