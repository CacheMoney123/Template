import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


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
  
  
  
    onKeyPress(e){
      if(e.key === "Enter"){
          this.srchChange(e);
        console.log("OOOO IMA ENTERING");
        console.log(this.state.search);
        //this.state.search now contains the value of the search after the user enters
      }
      
    }
    
    render() {
      return (
  <div>
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