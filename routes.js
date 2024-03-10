const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/login", (req, res) => {
  res.send("Login Page");
});

router.get("/register", (req, res) => {
  res.send("Register Page");
});

// Handle all other requests
router.get("*", (req, res) => {
  res.send("Page Not Found");
});

module.exports = router;
