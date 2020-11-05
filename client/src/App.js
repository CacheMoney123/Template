import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
<<<<<<< Updated upstream
=======
import Login from "./components/Header/Login"
import CreateUser from "./components/Header/create-user";
import "./App.css"
import recipeSearch from "./components/recipe-search"
>>>>>>> Stashed changes

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/recipes" component={recipeSearch} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
