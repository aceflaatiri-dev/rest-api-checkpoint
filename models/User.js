const mongoose = require("mongoose");

// Define User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

// Export model
module.exports = mongoose.model("User", userSchema);