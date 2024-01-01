const express = require("express");
const app = express();
const port = 3300;
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.get("/books", (req, res) => {
  res.send("Rework, Change the way you work forever");
});
app.get("/login", (req, res) => {
  res.send(`<h1>Please login the Application</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Application is running on ${port}`);
});
