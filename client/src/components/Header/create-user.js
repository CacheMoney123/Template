import React, { Component } from 'react';
import axios from 'axios';
import './create-user.css'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      created: '',
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
    }

    console.log(user);

    axios.post('http://localhost:5000/login', user)
      .then(res => console.log(res),
      this.setState({
        created: "Account successfully created! Try to login."
      })
      )
      .catch( err => {
        this.setState({
          created: "An error occurred, try again!"
        })
      } );

    this.setState({
      username: '',
      password: '',
      email: '',
      name: '',
    })
  }


  render() {
    
    return (
      <div className="App2">
          <header className = "bgstuff"> 
        <h3>Create An Account</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>Email: </label>
            <input type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
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
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
          <p className="notif"> {this.state.created} </p>
        </form>
        </header>
      </div>
    )
  }
}