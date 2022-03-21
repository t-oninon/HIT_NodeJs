const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/app");

const app = express();
const port = 3000;

app.use(express.json());

route(app);

mongoose
  .connect('mongodb://localhost:27017/hit_store_dev')
  .then(() => {
    console.log("Successfully! Connected to database");
  })  
  .catch((err) => {
    console.log("Failure!", err.message);
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});