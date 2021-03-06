import React, {useContext} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import {AuthContext} from './context/authcontext';


import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
/*import NavBar from "./components/Header/NavBar";*/
import Login from "./views/Login/login"
import Register from "./views/Register/register"
import Landing from "./views/Landing/landing";
import Recipes from "./views/Recipes/recipes"
import FoodDrives from "./views/FoodDrives/fooddrives"
import COVID from "./views/COVID/covid"
import More from "./views/More/more"
import createRecipe from "./views/CreateRecipe/createRecipe";
import Account from "./views/Account/account"
import "./App.css"


const App = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  
  return (
    <div>
      <Switch>
       
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/users" exact component= {Login} />
        <Route exact path="/login" exact component= {Register} />
        <Route exact path="/landing" exact component= {Landing} />
        <Route exact path="/recipes" exact component= {Recipes} />
        <Route exact path="/drives" exact component= {FoodDrives} />
        <Route exact path="/covid19" exact component= {COVID} />
        <Route exact path="/more" exact component= {More} />
        <Route exact path="/createRecipe" exact component={createRecipe} />
        <Route exact path="/account" exact component={Account} />
      
        <Route component={NotFound}/>
      </Switch>
      
    </div>
  );
}

export default App;
