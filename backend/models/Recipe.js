const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  rating: { type: Number, default: 0 },
  comments: { type: [String] }
});

module.exports = mongoose.model('Recipe', RecipeSchema);