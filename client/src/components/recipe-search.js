import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
//import { getData } from './SpoonAPI.js'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const axios = require("axios");


export default class recipeSearch extends Component {
    constructor(props) {
      super(props);
  
      this.srchChange = this.srchChange.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
      this.state = {
       search: '',
       recipieJSON: [],



      }
    }
  
    fetchData = async str => {
      var userString = str;
      userString = userString.replace(/ /g, "%C");
       await axios({
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
           
    
           

           
           this.setState({recipieJSON: response.data});
    
           for (var i in response.data) {
            console.log(i);
           console.log(response.data[i])
           console.log("2")
           //console.log(this.state.recipieJSON[i].title)
           }
    
    
          })
          .catch((error)=>{
            console.log(error)
            let Recipe = "Error Occured";
            
          })

    }


  srchChange(e){
  this.setState({search: e.target.value})
  }
  
  
  
    onKeyPress(e){
      if(e.key === "Enter"){
          this.srchChange(e);
        //console.log("OOOO IMA ENTERING");
        //console.log(this.state.search);
        //this.state.search now contains the value of the search after the user enters
        
        this.fetchData(this.state.search);

        /*
         const init = async() => {
            const data = await getData(this.state.search);
            //console.log("data recieved");
           // console.log(data);
         };

         await init();
        */
      }
      
    }
    
    render() {
      return (
  <div>
      <SearchIcon
      
      
      />
  
  
  <TextField
  hintText = 'Search for recipes'
  value = {this.state.search}
  onChange = {this.srchChange}
  onKeyDown = {this.onKeyPress}
  />
  
  {!(this.state.recipieJSON === undefined || this.state.recipieJSON.length == 0) &&
    <Card> 
        <CardHeader
       title = {this.state.recipieJSON[0].title}
        />
    </Card>
      
      
    
      
    }
    

</div>
      )
  }}