import React from 'react';
import './Header.css';
import { APP_ID, APP_KEY } from '../../config.js';

import { Container, AppBar, Toolbar } from '@material-ui/core';

const Header = ( {setRecipes, setFoodQuery} ) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    let query = e.target["query"].value;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setRecipes(data);
      setFoodQuery(query);
    })
  }


  return (
    <div className="header">
      <div className="header__navbar">
        <AppBar>
          <Toolbar>

          </Toolbar>
        </AppBar>
      </div>
      <Container>
        <div className="header__content">
          <h2>Get instant recipe ideas for the good food mood</h2>
          {/* <p>Get instant recipe ideas for the good food mood</p> */}
        </div>
        <div className="header__search">
          <form type="submit" onSubmit={handleSubmit}>
            <input className="header__input" type="text" name="query" placeholder="Enter recipe query i.e Salad, Chicken, Pizza" />
            {/* <input className="header__submit" type="submit" value="Search"/> */}
            <button className="header__submit" type="submit" >Search</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Header;