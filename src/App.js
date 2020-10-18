import React from 'react';
import "./App.css"

import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Suggestions from './components/Suggestions/Suggestions';

const App = () => {
  return(
    <div className="app">
      <Header />
      <Suggestions />

      <div className="app__results">
        <RecipeList />
      </div>
    </div>
  )
}

export default App;