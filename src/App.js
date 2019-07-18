import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';
import axios from 'axios';
import './App.css';



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      recipes: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let query = e.target['query'].value

    const APP_ID = 'b169101d';
    const APP_KEY = 'f768f690742f7e50cd246ac265334079';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
            
    axios.get(url)
        .then(res => {
            let recipes = res.data.hits;
            this.setState({
                recipes : recipes.slice(0,6)
            })
        })
  }

  render(){
    return(
      <div className="App">
        <header>
            <nav className="nav nav-wrapper">
                  <div className="container">
                  <span className="brand-logo center">Ravenous</span>
                  </div>
              </nav>
              <div className="container">
                  <form action="" className="white z-depth-1 hoverable" onSubmit={this.handleSubmit}>
                      <div className="input-field">
                          <input type="text" name="query" placeholder="Enter a recipe query (e.g. Tomatoes, Potaoes or Pizza)" />
                      </div>
                      <div className="center">
                          <button type="submit" className="btn z-depth-0">Search Recipes</button>
                      </div>
                  </form>
              </div>
          </header>
        <RecipeList recipes={this.state.recipes} /> 
      </div>
    )
  }
}

export default App;
