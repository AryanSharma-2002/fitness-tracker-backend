const express = require("express");
const router = express.Router();

const { addUser } = require("../controllers/register.js");

router.post("/", addUser);

module.exports = router;
