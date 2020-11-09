import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { getData } from './SpoonAPI.js'

export default class recipeSearch extends Component {
    constructor(props) {
      super(props);
  
      this.srchChange = this.srchChange.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
      this.state = {
       search: ''
      }
    }
  
  srchChange(e){
  this.setState({search: e.target.value})
  }
  
  
  
    async onKeyPress(e){
      if(e.key === "Enter"){
          this.srchChange(e);
        //console.log("OOOO IMA ENTERING");
        //console.log(this.state.search);
        //this.state.search now contains the value of the search after the user enters
        



         const init = async() => {
            const data = await getData(this.state.search);
            //console.log("data recieved");
           // console.log(data);
         };

         await init();
        
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
  
  
  
      </div>
        
      )
    }
  }