// List of Fruits
const express = require("express");
const router = express.Router();

let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

// GET all fruits
router.get("/fruits", (req, res) => {
  res.json(fruitsList);
});

// GET a specific fruit by ID
router.get("/fruits/:id", (req, res) => {
  const fruitsId = parseInt(req.params.id);
  const Fruits = fruitList.find((fruits) => fruits.id === fruitsId);
  if (!fruits) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

module.exports = router;
