const routes = require("express").Router();

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
routes.get('/', professionalController.getData);
// localhost:8080/professional/
module.exports = router;