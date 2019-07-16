import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';

import './App.css';



class App extends React.Component {

  render(){
    return(
      <div className="App">
         
        <RecipeList/> 
      </div>
    )
  }
}

export default App;
