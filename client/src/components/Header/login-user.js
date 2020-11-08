import React, { Component } from 'react';
import axios from 'axios';
import { Message, Form } from "semantic-ui-react";
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

    axios.get('http://localhost:5000/users', user)
      .then(res => console.log(res),
      this.state.loggedIn = true )
      .catch( err => console.log("An error occurred.") );

    this.setState({
      username: '',
      password: ''
    })
    
  }

  render() {
      
    if(this.state.loggedIn === true) {
      this.props.history.push('/landing');
      this.forceUpdate();
    }


      return (
          <div className="Login">
            <header className="bgstuff">
              <h3>Login to Account</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input type="text"
                         required
                         className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeUsername}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password"
                         required
                         className="form-control"
                         value={this.state.password}
                         onChange={this.onChangePassword}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
              </form>

            </header>

          </div>


      )

  }
}