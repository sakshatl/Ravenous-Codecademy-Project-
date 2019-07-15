import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';

import './App.css';



class App extends React.Component {
  render(){
    return(
      <div className="App">
        <header>
          <nav className="nav nav-wrapper">
            <div className="container">
              <a href="" className="brand-logo">Ravenous</a>
            </div>
          </nav>
        </header> 
        <RecipeList />   
      </div>
    )
  }
}

export default App;
