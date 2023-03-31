const Recipe = require('../models/Recipe');

module.exports = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID)
    },
    async getRecipes(_, { amount }) {
      return await Recipe.find(amount).sort({ createdAt: -1 }).limit(amount)
    }
  },
  Mutation: {
    async createRecipe(_, { recipeInput: { name, description } }) {
      const createRecipe = new Recipe({
        name,
        description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        downVote: 0
      })

      const result = await createRecipe.save();
      return {
        id: result.id,
        ...result._doc
      }
    }
  }
}