const {Scene} = require("../models/Scene");


const sceneController = {
//create new scene
registerScene: async (req, res, next) => {
    try {
        const newScene = await new Scene({
            name: req.body.name,
            stars: req.body.stars,
            unlocked: false,
            score: req.body.score
        });
        const Scene = await newScene.save();
        res.status(200).json(Scene);
    } catch (error) {
        res.status(500).json(error);
    }
},
// get all scene
getAllScene: async (req, res, next) => {
    try {
        const scene = await Scene.find();
        res.status(200).json(scene);
    } catch (error) {
        res.status(500).json(error);
    }
},
// delete scene
deleteScene: async (req, res, next) => {
    try {
        const scene = await Scene.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete Successfully")

    } catch (error) {
        res.status(500).json(error);
    }
},
// lấy thông tin một scene
getSceneId: async (req, res, next) => {
    try {
        const id = req.params.id;
        const scene = await Scene.findById(id);
        if (!scene) {
            return res.status(404).json({ message: 'Không tìm thấy thông tin' });
        }
        res.status(200).json(scene);
        return scene;
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
},
// cập nhật tt tài khoản
updateScene: async (req, res) => {
    try {
        const scene = await Scene.findByIdAndUpdate(
            req.params.id.trim(),
            {
                $set: req.body,
            },
            { returnDocument: "after" }
        );
        const returnedScene = {
            ...scene._doc
        };
        res.status(200).json(returnedScene);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
},
}
module.exports = sceneController;