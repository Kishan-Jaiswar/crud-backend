const express = require("express");

const app = express();

app.use(express.json()); // ✅ Ensures JSON parsing

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

// ✅ Do NOT use app.listen() in serverless functions
module.exports = app;