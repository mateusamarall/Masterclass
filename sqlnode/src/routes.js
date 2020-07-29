const express = require("express");
const UserController = require("./Controllers/UserController");
const routes = express.Router();

routes.post("/users", UserController.store);

module.exports = routes;
