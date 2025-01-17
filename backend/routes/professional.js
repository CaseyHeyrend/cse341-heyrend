const express = require("express");
const router = new express.Router();

const professionalController = require('../controllers/professional.js');


// GET /feed/posts
router.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;