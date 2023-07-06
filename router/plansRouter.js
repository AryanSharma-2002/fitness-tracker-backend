const express = require("express");
const router = express.Router();

const { addPlan, getPlans } = require("../controllers/plans.js");

router.post("/", addPlan);
router.get("/", getPlans);

module.exports = router;

