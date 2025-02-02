// the modules
const express = require("express");
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
const MongoClient = require("mongodb").MongoClient;

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// Local
const mongodb = require("./database/connect");

const app = express();
// From env flie
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
//Middlewares
app.use(bodyParser.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
  const allowedOrigin =
    process.env.NODE_ENV === "production" ? "https://cse341-heyrend.onrender.com" : "http://localhost:8080";
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    next();
  });
//  import routes
const nameRoutes = require("./routes/name");
const contactsRoutes = require("./routes/contacts");
// routes
app.use("/name", nameRoutes);
app.use("/contacts", contactsRoutes);

// eslint-disable-next-line no-unused-vars
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`App Connected to DB and listening on ${host}:${port}`);
  }
});
//Lesson 01
//app.use("/", require("./routes"))
//app.listen(port, () => {console.log(`Running on port ${port}`)})