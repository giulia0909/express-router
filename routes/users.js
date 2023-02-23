const express = require("express");
const router = express.Router();

// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

// GET all users
router.get("/users", (req, res) => {
  res.json(userList);
});

// GET a specific user by ID
router.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userList.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

module.exports = router;
