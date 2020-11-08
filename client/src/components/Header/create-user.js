import React, { Component } from 'react';
import axios from 'axios';
import "./create-user.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
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

<<<<<<< Updated upstream
  onSubmit(e) {
=======
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

  async onSubmit(e) {
>>>>>>> Stashed changes
    e.preventDefault();
    const {history} = this.props;

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

<<<<<<< Updated upstream
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
=======


    await axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res),
      this.state.created = true
      )
      .catch( err => console.log("An error occurred.") );
>>>>>>> Stashed changes

    this.setState({
      username: '',
      password: ''
    })

    // await history.push('/landing');


  }

  render() {
    return (
      <div className="App2">
          <header className = "bgstuff"> 
        <h3>Create New User</h3>
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
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
        </header>
      </div>
    )
  }
}