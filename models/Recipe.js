const { model, schema } = require('mongoose');

const recipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: Date,
  thumbsUp: Number,
  downVote: Number
});

module.exports = model('Recipe', recipeSchema);