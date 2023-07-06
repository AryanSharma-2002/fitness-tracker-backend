const expressAsyncHandler = require("express-async-handler");
const { Activity } = require("../models/activityModel");
const addActivity = expressAsyncHandler(async (req, res) => {
  try {
    const { sno, activity, duration, distance, sets } = req.body;
    console.log("activity add", sno);
    if (duration < 0 || distance < 0 || sets < 0) {
      throw new Error("Negative not allowed for duration,distance and sets");
    }
    const result = await Activity.create({
      serialNo: sno,
      activity: activity,
      duration: duration,
      distance: distance,
      sets: sets,
    });
    console.log(result);
    res.status(200).json(result);
    return;
  } catch (err) {
    res.status(400).send(err.message);
  }
});
const getActivities = expressAsyncHandler(async (req, res) => {
  try {
    const result = await Activity.find({});
    console.log(result);
    if (result) {
      res.status(200).json(result);
      return;
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
const removeActivity = expressAsyncHandler(async (req, res) => {
  try {
    const { sno } = req.body;
    const result = await Activity.deleteOne({ serialNo: sno });
    if (result) {
      res.status(200).json(result);
      return;
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = { addActivity, getActivities, removeActivity };
