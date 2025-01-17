import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    const _token = JSON.parse(localStorage.getItem('joblyUser')) || null;
    // const _token = parsed
    //   ? parsed._token
    //   : null;
    paramsOrData._token = (_token); // for now, hardcode token for "testing"

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle, username) {
    let res = await this.request(`companies/${handle}`, { username });
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async search(terms) {
    let res = await this.request(`search`, { search: terms });
    return res;
  }

  static async getJobs(offset) {
    let res = await this.request(`jobs`, { offset });

    return res.jobs;
  }

  static async getJobsCount() {
    let res = await this.request(`jobs`);
    return res.jobs.length;
  }

  static async login(params) {
    let res = await this.request(`login`, params, 'POST');
    return res.token;
  }

  static async register(params) {
    let res = await this.request(`users`, params, 'POST');
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async updateUser(params) {
    const { username } = params;
    delete params.username;
    let res = await this.request(`users/${username}`, params, 'PATCH');
    return res.user;
  }

  static async applyToJob(id, username) {
    let res = await this.request(`jobs/${id}/apply`, { username }, 'POST');
    return res.message;
  }

}

export default JoblyApi;