const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    collection: "user-data",
    timestamps: true,
  }
);

const model = mongoose.model("UserData", User);

module.exports = model;
