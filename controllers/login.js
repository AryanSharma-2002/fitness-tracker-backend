const expressAsyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const checkUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const [result] = await User.find({ email: email });
    if (!result) {
      throw new Error("Email does not exists");
    }
    if (result.password != password) {
      throw new Error("Wrong password");
    }

    console.log(result);
    res.status(200).send("login successfully");
    return;
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = { checkUser };
