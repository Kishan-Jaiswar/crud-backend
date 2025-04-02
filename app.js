const express = require("express");

const app = express();

// Middleware (if needed)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About route 🎉 ");
});

module.exports = app; // ✅ Ensure we export app