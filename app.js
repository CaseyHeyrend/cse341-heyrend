// the modules
const express = require("express");
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
const MongoClient = require("mongodb").MongoClient;


// Local
const mongodb = require("./database/connect");

const app = express();
// From env flie
const port = process.env.PORT || 8080;

//Middlewares
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
//  import routes
const contactsRoutes = require("./routes/contacts");
// routes
app.use("/contacts", contactsRoutes);

// eslint-disable-next-line no-unused-vars
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
//Lesson 01
//app.use("/", require("./routes"))
//app.listen(port, () => {console.log(`Running on port ${port}`)})