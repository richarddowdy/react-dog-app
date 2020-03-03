import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogsList from './DogsList';

function Routes({ dogs }) {
  // console.log(dogs);
  return (
    <Switch>
      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs}/>
      </Route>
      <Route exact path='/dogs'>
        <DogsList dogs={dogs} />
      </Route>
      <Redirect to='/dogs'/>
    </Switch>
  )
}

export default Routes;