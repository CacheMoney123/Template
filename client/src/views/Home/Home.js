import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                   <u>Welcome to SEASONE(tc)D</u>
                </p>  <p className="info">With Seasoned, you can:
                <ul> <li> Find meal ideas based on what you have available</li> 
                <li> Access COVID-19 resources </li>
                <li> Find food drives and testing locations near you</li></ul></p>
                <div className="get-started"> 
                <Link className = "get-started" to='/users'> GET STARTED </Link>
                 </div>
                
            </header>
        </div>
    );
}

export default Home;
