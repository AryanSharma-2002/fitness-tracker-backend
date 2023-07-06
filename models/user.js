const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  mobile: Number,
  dob: Date,
  password: String,
});

const userModel = new mongoose.model("User", userSchema);

module.exports = { User: userModel };
