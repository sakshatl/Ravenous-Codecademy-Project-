import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';
import Footer from './components/Footer/Footer';

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
          <div className="container">
              <form action="" className="white">
                  <div className="input-field">
                    <label htmlFor="">Recipe Query</label>
                    <input type="text" name="query" placeholder="Enter a recipe query (e.g. Tomatoes, Potaoes or Pizza)" />
                  </div>
                  <div className="center">
                    <button type="submit" className="btn z-depth-0">Search Recipes</button>
                  </div>
              </form>
          </div>
        </header> 
        <RecipeList name="potatoes" /> 
        <Footer />  
      </div>
    )
  }
}

export default App;
