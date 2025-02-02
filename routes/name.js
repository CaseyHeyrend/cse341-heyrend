const express = require("express");
const router = express.Router();
const nameController = require("../controllers/name");

// Lesson 1 or Branch Lesson01
router.get("/routeJoe", nameController.routeJoe);

module.exports = router;