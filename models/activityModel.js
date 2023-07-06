const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  serialNo: {
    type: String,
    require: true,
    unique: true,
  },
  activity: {
    type: String,
    require: true,
  },
  duration: Number,
  distance: Number,
  sets: Number,
});

const activityModel = new mongoose.model("Activity", activitySchema);

module.exports = { Activity: activityModel };
