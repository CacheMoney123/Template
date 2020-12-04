import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    const [search , setSearch] = useState('')
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/seasoned.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className="username-search">
                <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control mr-sm-2" placeholder="Search Users" value={search} onSubmit={(event => fetchUsers(event.target.value))} aria-label="Search Users"
                               aria-describedby="basic-addon1"/>
                    </div>
                </form> </div>
            <div className = "nav-items">
<<<<<<< Updated upstream
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Register'>Extra Page</Link>
                <a className = "nav-link" target='_blank' rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">
                    React Docs
                </a>
                <a className = "nav-link" target="_blank" rel="noopener noreferrer" href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a>
                <a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">Node Docs</a>
                <Link className = "user-login" to='/users'> Login </Link>
=======
                <Link className = "nav-link" to='/landing'>Home</Link>
                <Link className = "recipes" to='/recipes'>Recipes</Link>
                <Link className = "nav-link" to='/drives'>Food Drives</Link>
                <Link className = "nav-link" to='/covid19'>COVID-19</Link>
                <Link className = "nav-link" to='/more'>More</Link>
                <Link className = "user-login" to='/users'> Login | Create Account </Link>
>>>>>>> Stashed changes
            </div>

        </div>
    )
};

const fetchUsers = (query) => {
    //setSearch(query)
    fetch('/searchUser',{
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query
        })
    }).then(res => res.json())
        .then(results => {
            console.log(results)
        })

}

export default NavBar;
