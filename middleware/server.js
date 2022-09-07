const express = require("express");
const app = express();
const dbo = require("./db/conn");
const User = require("./models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 27017;
const uri =
  "mongodb+srv://mern:mongodb@cytrynowysorbet.udove.mongodb.net/e-grade-book";

mongoose.connect(uri);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  dbo.connectToServer((error) => {
    error ? console.error(error) : "";
  });
  console.log(`Server is running on port: ${port}`);
});

app.get("/hello", (req, res) => {
  res.send("hello from API");
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ status: "error", error: "invalid login" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jsonwebtoken.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else return res.json({ status: "wrong login or password", user: false });
});
