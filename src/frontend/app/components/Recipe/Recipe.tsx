import * as React from 'react';

interface Props {
  recipe: any;
}
class RecipeComponent extends React.Component<Props> {


  render() {
    const { recipe } = this.props;
    return (
      <React.Fragment>
        <h3>{recipe.title}</h3>
        <p>What you will need:</p>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={`ingredient-${index}`}>{ingredient}</li>
        ))}
      </React.Fragment>
    )
  }
}

export default RecipeComponent
