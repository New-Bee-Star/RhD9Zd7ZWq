import * as _ from 'lodash';

export const sortRecipes = (recipeState: any, ingredientState: any) => {
  let filteredRecipe = [];
  recipeState.recipes.map(recipe => {
    let flag = false;
    recipe.ingredients.map(ingredient => {
      const ingredientData = _.find(ingredientState.ingredients, {title: ingredient});
      if (ingredientData && new Date(ingredientData['use-by']) < new Date())
        flag = true;
        return;
    })
    if (!flag)
      filteredRecipe.push(recipe);
  })
  let finalRecipe = [];
  filteredRecipe.map(recipe => {
    let flag = false;
    recipe.ingredients.map(ingredient => {
      const ingredientData = _.find(ingredientState.ingredients, {title: ingredient});
      if (ingredientData && new Date(ingredientData['best-before']) < new Date())
        flag = true;
        return;
    })
    if (!flag)
      finalRecipe.push(recipe);
    else
      finalRecipe.unshift(recipe);
  })
  return finalRecipe;
}