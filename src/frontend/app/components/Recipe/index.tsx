import * as React from 'react';
import axios from 'axios';
import RecipeComponent from './Recipe';
import { IngredientState, RecipeState } from '../../types';
import { sortRecipes } from '../../utils';
import { recipeURL, ingredientURL } from '../../API';
interface Props {}
interface State {
  recipeState: RecipeState;
  ingredientState: IngredientState;
  finalRecipe: any;
}
class RecipePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipeState: undefined,
      ingredientState: undefined,
      finalRecipe: undefined,
    }
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    const that = this;
    axios.get(recipeURL)
    .then((recipeResponse) => {
      that.setState({recipeState: recipeResponse.data});
        axios.get(ingredientURL)
        .then( (ingredientResponse) => {
          that.setState({ingredientState: ingredientResponse.data},
            () => this.setState({finalRecipe: sortRecipes(recipeResponse.data, ingredientResponse.data)}));
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { finalRecipe } = this.state;
    if (typeof finalRecipe !== 'undefined')
      return (
        <div className="container">
          {
            finalRecipe.map((recipe, index) => (
              <div className="recipe--container" key={index}>
                <RecipeComponent recipe={recipe} />
              </div>
            ))
          }
          <style>
          {`
              body {
                font-family: Arial;
                padding-top: 100px;
                background-color: #232323;
                margin: 40px;
                color: white;

            }
            .container {
              margin-left: auto;
              margin-right: auto;
            }
            .recipe--container {
              border: 1px solid #d5402b;
              margin-bottom: 10px;
              padding: 10px;
            }
          `}
          </style>
        </div>
      )
    return (<div></div>)
  }
}

export default RecipePage
