import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";


import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
/*import NavBar from "./components/Header/NavBar";*/
import Login from "./views/Login/login"
import CreateUser from "./components/Header/create-user";
import "./App.css"


const App = () => {
  return (
    <div>

      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/users" exact component= {Login} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
