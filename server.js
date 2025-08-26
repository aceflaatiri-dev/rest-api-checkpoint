// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

// Initialize app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ DB connection error:", err));

// Default route
app.get("/", (req, res) => {
  res.send("REST API is running...");
});

// Start server
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);