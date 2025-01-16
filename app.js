require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 8080;
const app = express();
 
app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})