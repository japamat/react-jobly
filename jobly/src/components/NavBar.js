import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="row d-flex py-3 mb-5 align-items-center nav-div" >
        <h3 className="col-2" >  <NavLink exact to="/">Jobly</NavLink>  </h3>
        <nav className="nav-bar-custom col-10 pr-5 d-flex justify-content-end align-items-center" >
          <NavLink className="mx-2" exact to="/companies" activeClassName="active">Companies</NavLink>
          <NavLink className="mx-2" exact to="/jobs" activeClassName="active">Jobs</NavLink>
          <NavLink className="mx-2" exact to="/login" activeClassName="active">Login</NavLink>
        </nav>
      </div>
    );
  }
}

export default NavBar;