import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import { getCurrentUser } from '../localStorageHelpers';

class Job extends Component {

  handleApply = async () => {
    let user = getCurrentUser();

    await JoblyApi.applyToJob(this.props.job.id, user.username);

    let jobButton = document.getElementById(this.props.job.id);
    jobButton.classList.add("disabled");
    jobButton.innerText = "Applied";
  }

  render() {
    const job = this.props.job;

    const { state } = job;
    const button = state
      ? <button id={job.id} className="btn btn-primary disabled">Applied</button>
      : <button id={job.id} onClick={this.handleApply} className="btn btn-primary">Apply</button>

    return (
      <div className="card my-4">
        <div className="card-header">
          {job.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{job.company_handle}</h5>
          <p className="card-text">
            Salary: {job.salary}
            <br />
            Equity: {job.equity}
          </p>
          { button }
        </div>
      </div>
    );
  }
}

export default Job;