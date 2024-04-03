const { User } = require("../../models/models");

const saveUsers = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    email,
  });
  await newUser.save();
  res.json("User Saved");
};

module.exports = saveUsers;
