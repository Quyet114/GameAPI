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
module.exports = route;