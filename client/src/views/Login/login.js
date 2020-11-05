import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CreateUser from "./../../components/Header/create-user";
import logo from "./loginPic.svg"

function Login() {
    return (
        <div className="total" >
          <img src={logo} className="login-picture" alt="logo" />
         
        <div className="container"><Router>
        <Route path="/users" exact component={CreateUser} />
        </Router>
        <Link className = "login-button" to='/login'>Login</Link>
        <Link className = "landing" to='/landing'>Register later</Link>
        </div>


        </div>

    );
}

export default Login;