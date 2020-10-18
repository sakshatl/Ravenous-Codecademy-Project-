import React from 'react';
import "./RecipeList.css";

import { Container } from '@material-ui/core';


const RecipeList = () => {
  return (
    <div className="recipelist">
      <Container>
        <div className="recipelist__content">
          <h3>Recipes based on <span>Pizza</span></h3>
        </div>
      </Container>
    </div>
  )
}

export default RecipeList;