import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginUser from "./../../components/Header/login-user";
import logo from "./registerPic.svg"

function Login() {
  
    return (
        <div className="total" >
          <img src={logo} className="register-picture" alt="logo" />
         
        <div className="containers-md"><Router>
        <Route path="/login" exact component={LoginUser} />
        </Router>
        <Link className = "register-button" to='/users'>Register</Link>
        <Link className = "landing" to='/landing'>Login later</Link>
        </div>


        </div>

    );
}

export default Login;