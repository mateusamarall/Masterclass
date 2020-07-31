const express = require("express");
const UserController = require("./Controllers/UserController");
const AddressController = require("./Controllers/AddressController");

const routes = express.Router();

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.post("/users/:user_id/addresses", AddressController.store);
routes.get("/users/:user_id/addresses", AddressController.index);

module.exports = routes;
