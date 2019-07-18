import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search from './Search';
import './NavBar.css';

class NavBar extends Component {
	loggedInNav = () => {
		return (
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item mr-4">
						<NavLink className="nav-link" to="/companies" activeClassName="active">
							Companies
						</NavLink>
					</li>
					<li className="nav-item mr-4">
						<NavLink className="nav-link" to="/jobs" activeClassName="active">
							Jobs
						</NavLink>
					</li>
					<li className="nav-item mr-4">
							<Link className="nav-link" to="/" onClick={this.props.onLogout}>
								Log Out
							</Link>
					</li>
				</ul>
				<Search handleSearch={this.props.handleSearch} />
			</div>
		);
	}

	loggedOutNav = () => {
		return (
			<div className="collapse navbar-collapse" id="navbarSupportedContent">

				<ul className="navbar-nav ml-auto">
					<li className="nav-item mr-4">
						<Link className="nav-link" to="/Login">
							Log In
						</Link>
					</li>
				</ul>
			</div>
		);
	}

	render() {
		const { username } = this.props;
		const logInOrOut = username ? this.loggedInNav() : this.loggedOutNav();

		return (
			<nav className="nav-bar-custom navbar navbar-expand-md mb-3">
				<Link className="navbar-brand" to="/">
					Jobly
				</Link>
				{logInOrOut}
			</nav>
		);
	}
}

export default NavBar;
