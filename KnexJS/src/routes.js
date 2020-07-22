const express = require("express");

const UserController = require("./Controllers/UserController");
const routes = express.Router();

routes.get("/users", UserController.index);

module.exports = routes;
