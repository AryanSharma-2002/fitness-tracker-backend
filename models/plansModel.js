const mongoose = require("mongoose");

const plansSchema = new mongoose.Schema({
  title: { type: String, require: true, unique: true },
  description: String,
  instructions: [String],
  images: [String],
});

const plansModel = new mongoose.model("Plans", plansSchema);

module.exports = { Plans: plansModel };
