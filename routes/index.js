const express = require("express");
const router = express.Router();


// Lesson 1 or Branch Lesson01
//router.get("/", nameController.routeJoe);
//router.use("/", require("./name"));
router.use("/", require("./name"));

// lesson 2 
// Week 3
router.use("/contacts", require("./contacts"));

// Week 4
router.use("/api-docs", require("./swagger"));

module.exports = router;