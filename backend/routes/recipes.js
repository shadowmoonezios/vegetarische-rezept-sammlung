const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(201).json(newRecipe);
});

module.exports = router;