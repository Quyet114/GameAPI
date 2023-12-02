const {User} = require("../models/User");
const bcrypt = require("bcrypt");
const authController = require("./authController");
const userController = {
    // get all user
    getAllUser: async (req, res, next) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // delete user
    deleteUser: async (req, res, next) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Successfully")

        } catch (error) {
            res.status(500).json(error);
        }
    },
    // lấy thông tin một user
    getUserId: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            res.status(200).json(user);
            return user;
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    },
    // cập nhật tt tài khoản
    updateUser: async (req, res) => {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id.trim(),
                {
                    $set: req.body,
                },
                { returnDocument: "after" }
            ).select("+password");
            const returnedUser = {
                ...user._doc
            };
            res.status(200).json(returnedUser);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    },
    // lưu điểm
    updateScore: async(req,res,next)=>{
        try {
            const { email, score } = req.body;
            // Tìm người dùng theo email và cập nhật điểm số
            const updatedUser = await User.findOneAndUpdate(
                { email: email },
                { $set: { score: score } },
                { new: true }
            );
    
            if (!updatedUser) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            const body = {
                notification:" Lưu điểm thành công",
                status:1,
                username:updatedUser.username,
                score:updatedUser.score
            }
    
            return res.status(200).json(body);
        } catch (err) {
            return res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật điểm số', error: err });
        }
    },
    savePosition: async(req,res,next)=>{
        try {
            const { email, positionX,positionY,positionZ } = req.body;
            // Tìm người dùng theo email và cập nhật điểm số
            const updatedUser = await User.findOneAndUpdate(
                { email: email },
                { $set: { positionX: positionX, positionY: positionY, positionZ: positionZ } },
                { new: true }
            );
    
            if (!updatedUser) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            const body = {
                notification:" Lưu vị trí thành công",
                status:1,
                username:updatedUser.username,
                positionX: updatedUser.positionX,
                positionY: updatedUser.positionY,
                positionZ: updatedUser.positionZ,

            }
    
            return res.status(200).json(body);
        } catch (err) {
            return res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật điểm số', error: err });
        }
    },
}
module.exports = userController;