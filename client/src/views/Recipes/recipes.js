import React, { useState } from "react";
import './recipes.css';
import NavBar from "../../components/Header/NavBar";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe";
import Alert from "../../components/Alert";

function Recipes() {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "ea9464f5";
    const APP_KEY = "a43b6fc29fad2ea45238236f4c713ca8";
  
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
    const getData = async () => {
      if (query !== "") {
        const result = await Axios.get(url);
        if (!result.data.more) {
          return setAlert("No food with such name");
        }
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
        setAlert("");
      } else {
        setAlert("Please fill the form");
      }
    };
  
    const onChange = e => setQuery(e.target.value);
  
    const onSubmit = e => {
      e.preventDefault();
      getData();
    };

    return (
        <div className="whoa" >
            <NavBar/>
        <div className="recC" >
       <h1>Find A Recipe</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
      </div>    
        </div>

    );
}

export default Recipes;