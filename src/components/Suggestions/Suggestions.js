import React from 'react';
import './Suggestions.css';

import { Grid, Container, Card, CardContent } from '@material-ui/core';

const Suggestions = () => {
  return (
    <div className="suggestions">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/pizza.png" alt="pizza" />
                <h4>Pizza</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/noodles.png" alt="noodles" />
                <h4>Noodles</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/salad.png" alt="salad" />
                <h4>Salad</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/eggs.png" alt="eggs" />
                <h4>Eggs</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/cake.png" alt="cake" />
                <h4>Cake</h4>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardContent>
                <img src="/img/fish.png" alt="fish" />
                <h4>Fish</h4>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Suggestions;