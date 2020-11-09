import { ReceiptOutlined } from "@material-ui/icons";

const axios = require("axios");

export function  getData(str){

  var userString = str;
  userString = userString.replace(/ /g, "%C");
  axios({
      "method":"GET",
      "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
      "headers":{
      "content-type":"application/json",
      "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key":"f853e0eb07mshba00f841a67c6c1p1018afjsn0c00f43d1f77",
      "useQueryString":true
      },"params":{
      "number":"2",
      "ranking":"1",
      "ignorePantry":"false",
      "ingredients": userString
      }
      })
      .then((response)=>{
       //console.log(response.data[0])

       
       for (var i in response.data) {
        console.log(i);
       console.log(response.data[i])
       
       }

       
       //console.log(response.data);

       return response;


      })
      .catch((error)=>{
        console.log(error)
        let Recipe = "Error Occured";
        return Recipe;
      })
    }