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
                
                <div className="get-started"> 
                <Link className = "get-started" to='/users'> GET STARTED </Link>
                 </div>
                
            </header>
        </div>
    );
}

export default Home;
