const express = require("express");
const router = express.Router();
const nameController = require("../controllers/name");

// Lesson 1 or Branch Lesson01
router.get("/name", nameController.routeJoe);

// lesson 2 
// Week 3
router.use("/contacts", require("./contacts"));

// Week 4
router.use("/api-docs", require("./swagger"));

module.exports = router;