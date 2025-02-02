
// Lesson 1 or Branch Lesson01
const routes = require("express").Router();
const nameController = require("../controllers/name");

/**
 * @desc: These are the routes for the lesson1 controller
 */
routes.get("/", nameController.routeJoeHeyrend);
routes.get("/dougheyrend", nameController.routeDougHeyrend);
routes.get("/samheyrend", nameController.routeSamHeyrend);


module.exports = routes;