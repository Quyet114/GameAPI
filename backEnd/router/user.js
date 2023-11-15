const userController = require("../controller/userController");

const route = require("express").Router();

//Get all users
route.get("/",userController.getAllUser);
//Delete user
route.delete("/:id", userController.deleteUser);

module.exports = route;