const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: 'https://luciel53.github.io/MosquitoKiller-Dep',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

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
