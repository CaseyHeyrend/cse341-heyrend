const routes = require('express').Router();
const nameController = require("../controllers/name");

// Lesson 1 or Branch Lesson01
routes.get("/", nameController.routeJoeHeyrend);

module.exports = routes;