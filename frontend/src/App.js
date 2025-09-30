import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/recipe/:id' component={RecipeDetails} />
        <Route path='/add' component={AddRecipe} />
      </Switch>
    </Router>
  );
}

export default App;