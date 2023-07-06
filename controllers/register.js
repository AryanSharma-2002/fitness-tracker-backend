const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const addUser = expressAsyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, dob, password } = req.body;
    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      dob: dob,
      password: password,
    });
    console.log(result);
    res.status(200).json(result);
    return;
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = { addUser };
