import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      found: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.get('http://localhost:5000/users/', user)
      .then( (res) => {
        console.log(res)
        if(res!=null) {
        this.setState({
          found: "Account found! Redirecting...",
          loggedIn: true,
        }) }
        else
          {  this.setState({
            found: "Account not found! Try again",
          }) }
      }
      )
      .catch( err => {
        this.setState({
          found: "That account cannot be found",
          loggedIn: false,
        })
        console.log(this.state.found)
      } );

    this.setState({
      username: '',
      password: ''
    })
    
  }

  
  render() {
  
    return (
      <div className="Login">
        <header className = "bgstuff"> 
        <h3>Login to Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          <p className="notif"> {this.state.found} </p>
          </div>
        </form>

        </header>
       
      </div>

        

    )
  }
}