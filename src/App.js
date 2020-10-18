import React, {useEffect, useState} from 'react';
import "./App.css"

import { Container } from "@material-ui/core";

import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Suggestions from './components/Suggestions/Suggestions';

const App = () => {
  const [recipes, setRecipes] = useState(null);
  const [foodQuery, setFoodQuery] = useState(null)
   
  useEffect(() => {

  }, [recipes])

  useEffect(() => {

  }, [foodQuery])

  console.log(recipes)

  return(
    <div className="app">
      <Header setRecipes={setRecipes} setFoodQuery={setFoodQuery} />
      <Suggestions />

      <div className="app__results">
        {recipes === null && (
          <div className="app__foodtip">
            <Container>
              <h3>Good food cooking tip</h3>
            </Container>
          </div>
        )}
        {
          recipes && (
            <RecipeList foodQuery={foodQuery} recipes={recipes} />
          )
        }

      </div>
    </div>
  )
}

export default App;