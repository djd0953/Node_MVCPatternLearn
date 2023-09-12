const express = require('express');
const userController = require("../controllers/users.controller.js");
const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.postUser);

module.exports = userRouter;