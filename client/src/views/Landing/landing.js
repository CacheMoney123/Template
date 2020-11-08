import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "../../components/Header/NavBar"

function Landing() {
    return (
        <div className="whoa" >
         <NavBar />
         <div className="base">
       <p className="t"> This is the landing page. </p>
        </div>
        </div>

    );
}

export default Landing;