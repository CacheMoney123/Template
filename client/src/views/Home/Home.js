import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                   <u>Welcome to SEASONE(tc)D</u>
                </p>
                <ul className="info">
                   <li> Testing how this item would look </li>
                   <li> And another </li>
                   <li> And another.... </li>
                   <li> Last one... </li>
                </ul>
                <div className="get-started"> 
                <Link className = "get-started" to='/users'> GET STARTED </Link>
                 </div>
                 <div className="triangle-right"> </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
