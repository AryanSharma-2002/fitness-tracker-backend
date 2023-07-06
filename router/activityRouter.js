const express = require("express");
const router = express.Router();

const {
  addActivity,
  getActivities,
  removeActivity,
} = require("../controllers/activity.js");

router.post("/", addActivity); // to add a new activity
router.get("/", getActivities); // get all activities
router.delete("/", removeActivity); // remove a activity

module.exports = router;
