import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";


import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import Login from "./components/Header/Login"
import CreateUser from "./components/Header/create-user";
import Recipes from "./views/Recipe/recipe";
import "./App.css"

const App = () => {
  return (
    <div>
      <NavBar /> 
    
      <Router> 
          <Route path="/user" component={CreateUser}/> 
          </Router>

      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
<<<<<<< Updated upstream
        <div className="container" >  
              <Route path="/users" exact component={CreateUser} />
              </div>
=======
        <Route exaxt path="/recipes" exact component={Recipes} />
        <Route exact path="/users" exact component= {Login} />
        <Route exact path="/login" exact component= {Register} />
        <Route exact path="/landing" exact component= {Landing} />
      
>>>>>>> Stashed changes
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
