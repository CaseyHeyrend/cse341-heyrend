const express = require('express');
const router = express.Router();
const nameController = require('../controllers');


// Lesson 1 or Branch Lesson01
router.get('/', nameController.getName);

// lesson 2
router.use('/contacts', require('./contacts'))

module.exports = router;