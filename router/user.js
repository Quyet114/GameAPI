const middlewareController = require("../controller/middlewareController");
const userController = require("../controller/userController");

const route = require("express").Router();

//Get all users
route.get("/",userController.getAllUser);
//Get users
route.get("/:id",userController.getUserId);
//Delete user
route.delete("/:id", userController.deleteUser);
//updateUser
route.put("/:id",userController.updateUser);
//updateScore
route.post("/save-score",userController.updateScore);
//savePosition
route.post("/save-position",userController.savePosition);
module.exports = route;