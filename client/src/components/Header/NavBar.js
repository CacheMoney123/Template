import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/seasoned.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Register'>Extra Page</Link>
                <a className = "nav-link" target='_blank' rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
                    React Docs
                </a>
                <a className = "nav-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>
<<<<<<< Updated upstream
                <a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Node Docs</a>
=======
                <a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Node Docs
                <Link className = "nav-link" to='/recipes'> Recipes </Link>
                </a>
                <Link className = "user-login" to='/users'> Login </Link>
                
>>>>>>> Stashed changes
            </div>

        </div>
    )
};

export default NavBar;
