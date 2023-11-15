const User = require("../models/User");

const userController = {
    // get all user
    getAllUser: async(req,res,next)=>{
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // delete user
    deleteUser: async(req,res,next)=>{
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully")

        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = userController;