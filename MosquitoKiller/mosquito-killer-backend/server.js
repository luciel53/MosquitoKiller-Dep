const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: 'https://luciel53.github.io',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// Middleware global for CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://luciel53.github.io");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error.message);
  });

// Routes
const resultsRouter = require("./routes/results");
app.use("/api/results", resultsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
