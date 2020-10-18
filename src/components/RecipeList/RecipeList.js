import React from 'react';
import "./RecipeList.css";

import { Container, Card, CardContent, Grid } from '@material-ui/core';


const RecipeList = ( {foodQuery, recipes} ) => {


  return (
    <div className="recipelist">
      <Container>
        <div className="recipelist__content">
          <h3>Recipes based on <span>{foodQuery}</span></h3>

          <Grid container spacing={5}>
            {
              recipes.hits.map((hit, index) => {
                return (
                  <Grid key={index} item spacing={5} xs={4}>
                    <Card>
                      <CardContent>
                        <div><img src={hit.recipe.image} height="100px" alt={hit.recipe.label} /></div>
                        <div><h4>{hit.recipe.label}</h4></div>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default RecipeList;