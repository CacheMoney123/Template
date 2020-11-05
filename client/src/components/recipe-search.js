import React, { Component } from 'react';
import axios from 'axios';
import SearchField from "react-search-field";


export default class recipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Query: ''
    }
  }

  onSearchClick(){
console.log("OOOO IMA CLICKING");

  }

  onEnter(){

    console.log("OOOO IMA ENTERING");
  }
  
  render() {
    return (
<div>
<SearchField
placeholder = 'Search...'
onSearchClick = {this.onSearchClick}
onEnter = {this.onEnter}
/>


    </div>
      
    )
  }
}