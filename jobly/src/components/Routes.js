import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from '../history';
import Jobs from './Jobs';
import Home from './Home';
// import Login from './Login';
import LoginContainer from '../containers/LoginContainer';
import NavBarContainer from '../containers/NavBarContainer';
import ProfileContainer from '../containers/ProfileContainer';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import SearchResults from './SearchResults';
import JoblyApi from '../JoblyApi';
import { getCurrentUser } from '../localStorageHelpers';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: {jobs: [], companies: []},
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

    
    // if (!this.state.user) {
    //   this.setState({ user });
    // }
  }

  async handleSearch(search) {
    let searchResults = await JoblyApi.search(search);
    this.setState({ searchResults });
  }

  companyDetail = props => {
    const { handle } = props.match.params;
    return this.props.username
      ? <CompanyDetail handle={handle} username={this.props.username} />
      : <Redirect to="/login"/>;
  }

  profile = props => {
    console.log(this.props);
    
    return this.props.username
      ? <ProfileContainer/>
      : <Redirect to="/login"/>;
  }

  jobs = props => {
    return this.props.username
      ? <Jobs/>
      : <Redirect to="/login"/>
  }

  render() {
    const user = getCurrentUser();
    if (user && !this.props.username) {
      this.props.getLoggedInUser(user);
      return <div>l0l please wait asshole</div>
    } else {
      return (
        <Router history={history}>
          <NavBarContainer handleSearch={this.handleSearch} />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/login" render={() => <LoginContainer /> }/>
            <Route exact path="/jobs" render={ this.jobs } />
            <Route exact path="/companies" render={() => <Companies />} />
            <Route exact path="/profile" render={ this.profile } />
            <Route exact path="/search" render={(rtProps) => <SearchResults searchResults={this.state.searchResults} {...rtProps} />} />
            <Route exact path="/companies/:handle" render={ this.companyDetail } />
          </Switch>
        </Router>
      );
    }
  }
}

export default Routes;
