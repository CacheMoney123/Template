import React from 'react';
import './recipes.css';
import NavBar from "../../components/Header/NavBar";
import RecipeSearch from "./recipesearch"
import RecipeData from "./recipedata"

function Recipes() {
    return (
        <div className="whoa" >
         <NavBar />
         <div className="base">
             <div className="container">
        <RecipeSearch />
        </div>
        </div>
        </div>

    );
}

export default Recipes;