const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
require("./app/models/inventory.model.js");

//configuring the database
require("dotenv").config();
const mongoose = require("mongoose");

// connecting to the database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require("./app/routes/inventory.router.js")(app);

// create a server
const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://&s:&s", host, port);
});
