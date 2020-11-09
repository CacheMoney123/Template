import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      ingredients: '',
    }
  }

  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      ingredients: this.state.ingredients,
    }

    console.log(recipe);

    this.setState({
      ingredients:'',
    })
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
                value={this.state.ingredients}
                onChange={this.onChangeIngredients}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        </header>
      </div>
    )
  }
}