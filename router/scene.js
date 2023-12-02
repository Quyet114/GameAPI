
const sceneController = require("../controller/sceneController");

const route = require("express").Router();
//Create Scene
router.post("/register", sceneController.registerScene);
//Get all users
route.get("/",sceneController.getAllScene);
//Get users
route.get("/:id",sceneController.getSceneId);
//Delete user
route.delete("/:id", sceneController.deleteUser);
//updateUser
route.put("/:id",sceneController.updateScene);
module.exports = route;