const express = require("express");
const router = express.Router();
const baseController = require("../controllers/name");

// Lesson 1 or Branch Lesson01
router.get("/name", baseController.getName);

module.exports = router;