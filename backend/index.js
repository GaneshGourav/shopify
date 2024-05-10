require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Shopify");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
