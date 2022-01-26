const express = require("express");
const router = express.Router();
const User = require("../models/user");
const validate = require("../tools/validation");
const findUser = require("../tools/findUser");
const addUser = require("../tools/addUser");
const sessionChecker = require("../tools/sessionchecher");

router.get("/", sessionChecker , (req, res, next) => {
  res.render("../views/login");
});

router.post("/" , (req,res,next) => {
    findUser(req.body.username)
    .then((data) => {
      if (data === null ) return res.status(400).send("invalid username or password");
      if (data.password !== req.body.password) return res.status(400).send("invalid username or password");
      console.log("login successful");
      req.session.user = data;
      res.send("login successful");
    })
    .catch((err) => {
      console.log(err);
      return res.render("register", { msg: "something went wrong" });
    });
})



module.exports = router;
