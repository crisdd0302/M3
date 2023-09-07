const express = require("express");
const router = express.router();
const accountsMethods = require("./methods");

router.post("/register", (req, res) => {
  res.send("Register here");
});

router.post("/login", (req, res) => {
  res.send("Login here");
});

router.get("/login", (req, res) => {
  res.send("Login here get");
});

module.exports = router;
