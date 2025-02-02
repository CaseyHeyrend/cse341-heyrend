const router = require('express').Router();
const nameController = require("./controllers/name");

// Lesson 1 or Branch Lesson01
router.get("/", nameController.routeJoeHeyrend);

module.exports = router;