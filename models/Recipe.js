const { model, Schema } = require('mongoose');

const recipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  thumbsUp: Number,
  downVote: Number
});

module.exports = model('Recipe', recipeSchema);