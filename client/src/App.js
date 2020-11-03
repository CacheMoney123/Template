import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";


import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import Login from "./components/Header/Login"
import CreateUser from "./components/Header/create-user";
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
        <div className="container" >  
              <Route path="/users" exact component={CreateUser} />
              </div>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
