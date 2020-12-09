import React, { Component } from 'react';
//import axios from 'axios';
import API from './API'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export default class RecipeSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ingredients: '',
      recipieJSON: [],



     }
  }

  fetchData = async (e) => {
    //e.preventDefault()
    let str = this.state.ingredients.replace(/ /g, "%C");
    //str = '"'+ str +'"';
   await API.getData(str)
    .then((response)=>{
      this.setState({recipieJSON: response.data});
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    console.log("something is here!");
}




  onChangeIngredients(e) {

    this.setState({ingredients: e.target.value})


  }


  onSubmit(e) {
    this.onChangeIngredients(e);

    this.fetchData(this.state.ingredients);
  }


  render() {
    
    return (
      <div className="App2">
          <header className = "bgstuff"> 
        <h3>Find a Recipe</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>What ingredients do you have? </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.ingredients || ''}
                onChange={this.onChangeIngredients}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
          <div>
          
          </div>
        </form>
        </header>

      </div>
    )
  }
}