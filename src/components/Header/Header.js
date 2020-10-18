import React from 'react';
import './Header.css';

import { Container, AppBar, Toolbar } from '@material-ui/core';

const Header = () => {
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
          <form>
            <input className="header__input" type="text" placeholder="Enter recipe query i.e Salad, Chicken, Pizza" />
            {/* <input className="header__submit" type="submit" value="Search"/> */}
            <button className="header__submit" type="submit" >Search</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Header;