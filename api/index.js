const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const connectMongoDb = require("../mongoConnection");

const app = express();

// ✅ Connect to MongoDB
connectMongoDb();

// ✅ CORS Middleware
app.use(
  cors({
    origin: [
      /* "http://localhost:5173",  */ "https://crud-frontend-six-chi.vercel.app",
    ], // Frontend URL
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

// ✅ Middleware for Parsing JSON and Query Parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API Routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/users", userRouter);

// ✅ Server Listening on Port 8080
const PORT = 8080;
app.listen(PORT, () =>
  console.log(`App is running at http://localhost:${PORT}`)
);

module.exports = app;
