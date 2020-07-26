const express = require("express");

const UserController = require("./Controllers/UserController");
const ProjectController = require("./Controllers/ProjectController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.put("/projects/:id", ProjectController.update);
routes.delete("/projects/:id", ProjectController.delete);

module.exports = routes;
