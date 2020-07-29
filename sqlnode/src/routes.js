const express = require("express");
const UserController = require("./Controllers/UserController");
const AddressController = require("./Controllers/AddressController");

const routes = express.Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post("/users/:user_id/addresses", AddressController.store);

module.exports = routes;
