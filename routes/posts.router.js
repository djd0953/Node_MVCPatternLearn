const express = require('express');
const postController = require('../controllers/posts.controller.js');
const postRouter = express.Router();

postRouter.get("/", postController.postMain);
postRouter.get("/p", postController.getPost);

module.exports = postRouter;