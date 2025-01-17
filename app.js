const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./backend/routes/professional.js');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/professional', professionalRoutes);

app.listen(port);