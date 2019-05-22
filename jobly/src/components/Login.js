import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const formFieldArr = [
  ['username', 'Username'],
  ['password', 'Password'],
  ['email', 'Email'],
  ['first_name', 'First Name'],
  ['last_name', 'Last Name']
]

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignUp: false,
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setAuthUser(this.state);
    this.setState({
      isSignUp: false,
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    });

    this.props.history.push("/jobs");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleForm() {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  render() {
    const { isSignUp } = this.state;

    const buttonLabel = isSignUp
      ? 'Register'
      : 'Log In';

    let formToShow = formFieldArr.map(field => (
      <div className="form-group row" key={field[0]} >
        <label className="col-3" htmlFor={field[0]}> {field[1]} </label>
        <input
          id={field[0]}
          onChange={this.handleChange}
          value={this.state[field[0]]}
          type="text"
          name={field[0]}
          className="form-control col-9"
          required
        />
      </div>
    ));

    // If not sign up slice the last three fields from form:
    formToShow = isSignUp
      ? formToShow
      : formToShow.slice(0, 2)

    return (
      <div className="container" >
        <div className="d-flex justify-content-center row" >
          <div className="col-6 d-flex justify-content-end">
            <h4>{buttonLabel}  </h4>
          </div>
          <div className="col-6 d-flex justify-content-start pt-1">
            <p className="btn-link" onClick={this.toggleForm} > {this.state.isSignUp ? 'already a user? log in' : 'new user? sign up!'} </p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="form-group"
        >
          {formToShow}
          <button className="btn btn-success" >{buttonLabel}</button>
        </form>
      </div>
    );
  }
}

export default Login;