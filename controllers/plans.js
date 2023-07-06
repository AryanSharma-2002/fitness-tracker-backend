const expressAsyncHandler = require("express-async-handler");
const { Plans } = require("../models/plansModel.js");

const addPlan = expressAsyncHandler(async (req, res) => {
  try {
    const { title, description, instructions, images } = req.body;
    const result = await Plans.create({
      title: title,
      description: description,
      images: images,
      instructions: instructions,
    });
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

const getPlans = expressAsyncHandler(async (req, res) => {
  try {
    const result = await Plans.find({});
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { addPlan, getPlans };
