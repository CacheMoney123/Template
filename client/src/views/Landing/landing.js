import React from 'react';
import './landing.css';
import NavBar from "../../components/Header/NavBar";
import logo from "./landingPic.jpg"

function Landing() {
    return (
        <div className="whoa" >
         <NavBar />
         <div className="base">
       <img src={logo} className="land-picture" alt="logo" />
       
       <p className="body-par"> Seasoned is all about affordable meal planning and
       getting out of the house. Catered with you in mind, Seasoned allows you to find
       recipes based on what you have in your pantry - nothing more! 
       <br/><br/>In addition, Seasoned allows you to find food drives near you so that
       you can expand your pantry inventory at no expense of your own.
       <br/><br/> We take pride is helping you find the best resources possible, whether
       it's for COVID-19 or for simple recipe ideas. Go on and take a look! </p>
        </div>
        </div>

    );
}

export default Landing;