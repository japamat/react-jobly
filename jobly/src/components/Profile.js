import React, { Component } from 'react';
import EditProfileForm from './EditProfileForm';
import JoblyApi from '../JoblyApi';
import jwt from 'jsonwebtoken';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: jwt.decode(JSON.parse(localStorage.getItem('joblyUser'))._token),
    }

    this.updateUser = this.updateUser.bind(this);
  }

  async updateUser(formData) {
    // make our api call to update the user in the db
    await JoblyApi.updateUser(formData);
    this.props.history.push("/jobs");
  }

  render() {
    const user = this.props;
    console.log(user);
    

    // Only display form once the user has really been updated
    // if it contains 'iat', it has NOT been updated.
    const formToShow = (!user.iat)
      ? null
      : <EditProfileForm user={user} updateUser={this.updateUser} />
    
    console.log(formToShow);
    
    return (
      <div>
        {formToShow}
      </div>
    )
  }
}
