import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    return (
        <div className = "header">
            <div className="justbg"></div>
            {/* Logo */}
            <Link className = "nav-title" to="/landing">
                <img className = "nav-logo" src={ "/logo.png" } alt="Seasoned logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/landing'>Home</Link>
                <Link className = "nav-link" to='/recipes'>Recipes</Link>
                <Link className = "nav-link" to='/drives'>Food Drives</Link>
                <Link className = "nav-link" to='/covid19'>COVID-19</Link>
                <Link className = "nav-link" to='/more'>More</Link>
                <Link className = "user-login" to='/users'> Login | Create Account </Link>
            </div>
        </div>
    )
};

export default NavBar;
