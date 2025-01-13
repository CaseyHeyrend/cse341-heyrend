const routes = require('express').Router();
const baseController = require('../controllers');

// Lesson 1 or Branch Lesson01
routes.get('/', baseController.getName);

module.exports = routes;