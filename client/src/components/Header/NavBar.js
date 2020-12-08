import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

import AuthService from '../../services/authservice';
import { AuthContext } from '../../context/authcontext';

const NavBar = props => {
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = ()=>{
        return (
            <Link className = "user-loginO" to='/users'> Login | Create Account </Link>
        )
    }

    const authenticatedNavBar = ()=>{
        return(
            <>
                {
                    user != null ? 
                    <Link to="/profile">
                        <li className="user-profile">
                            My Profile
                        </li>
                    </Link> : null
                }  
                <button type="button" 
                        className="user-login" 
                        onClick={onClickLogoutHandler}>Logout</button>
            </>
        )
    }
   
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

                <div className="stateManager" id="loginContext">
                <ul className="user-login">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>

            </div>
        </div>
    )
};

export default NavBar;
