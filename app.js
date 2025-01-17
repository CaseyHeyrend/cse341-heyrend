require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');


const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
//Lesson 01
//app.use('/', require('./routes'))
//app.listen(port, () => {console.log(`Running on port ${port}`)})